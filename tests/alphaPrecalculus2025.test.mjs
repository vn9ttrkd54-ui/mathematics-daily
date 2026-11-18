import assert from "node:assert/strict";
import test from "node:test";
import katex from "katex";
import { alphaQuestions } from "../data/questions/alpha.ts";
import { muQuestions } from "../data/questions/mu.ts";
import { thetaQuestions } from "../data/questions/theta.ts";

const papers = new Map([
  ["2025 January Regional", "AACDDBB-AECCBAD-ACBEADBBABCDDB"],
  ["2025 February Regional", "BCDCADADDCCBDDABBACADBCCACBABB"],
  ["2025 March Regional", "ABCCBBDDB-AADD-DCECBCDCDAEDBBD"],
  ["2025 February King Statewide", "BADCCBDBAAC-DABCDABDDBCCBADDBC"],
  ["2025 Chiles Statewide", "BDCCBABCACBBBBDADAABBCCEDADDBA"],
]);
const imported = alphaQuestions.filter(q => papers.has(q.source?.competition));

test("the 2025 Precalculus papers retain the adjudicated keys and original numbers", () => {
  assert.equal(imported.length, 145);
  for (const [competition, key] of papers) {
    assert.equal(key.length, 30);
    const questions = imported.filter(q => q.source.competition === competition);
    assert.equal(questions.length, key.replaceAll("-", "").length);
    const byNumber = new Map(questions.map(q => [q.source.questionNumber, q]));
    for (const [index, answer] of [...key].entries()) {
      const q = byNumber.get(index + 1);
      if (answer === "-") {
        assert.equal(q, undefined);
        continue;
      }
      assert.equal(q.answer, answer, competition + " #" + (index + 1));
      assert.equal(q.source.event, "Precalculus Individual");
      assert.equal(q.choices.length, 5);
    }
  }
});

test("all new labels belong to the existing bank and every formula renders", () => {
  const previous = [...alphaQuestions.filter(q => q.id < 20391), ...muQuestions, ...thetaQuestions];
  const topics = new Set(previous.map(q => q.topic));
  const methods = new Set(previous.flatMap(q => q.methods));
  const math = /\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]/g;
  for (const q of imported) {
    assert.ok(topics.has(q.topic), q.topic);
    assert.ok(Number.isInteger(q.difficulty) && q.difficulty >= 1 && q.difficulty <= 5);
    for (const method of q.methods) assert.ok(methods.has(method), method);
    assert.equal(new Set(q.methods).size, q.methods.length);
    for (const text of [q.question, ...q.choices, q.solution]) {
      assert.doesNotMatch(text.replace(math, ""), /\\/, "unpaired delimiter in " + q.id);
      for (const match of text.matchAll(math)) {
        katex.renderToString(match[1] ?? match[2], { strict: "error", throwOnError: true });
      }
    }
  }
});

test("the disputed counts and King angle sum agree with direct enumeration", () => {
  let integerPowers = 0;
  for (let a = 1; a <= 6; a++) {
    for (let b = 1; b <= 6; b++) {
      if (a !== b && (6 * a) % b === 0) integerPowers++;
    }
  }
  const jan = imported.filter(q => q.source.competition === "2025 January Regional");
  assert.equal(integerPowers, 22);
  assert.match(jan.find(q => q.source.questionNumber === 20).solution, /22/);
  const grid = Array.from({ length: 48 }, (_, i) => Math.PI * i / 24);
  const firstEquation = grid.filter(x => Math.abs(Math.sin(4 * x) ** 2 - .75) < 1e-9);
  assert.equal(firstEquation.length, 16);
  assert.match(jan.find(q => q.source.questionNumber === 21).solution, /16/);
  const kingRoots = grid.filter(x => Math.abs((2 * Math.sin(x) ** 2 - Math.sin(x) + 1) ** Math.cos(x) - 1) < 1e-9);
  assert.equal(kingRoots.length, 6);
  assert.ok(Math.abs(kingRoots.reduce((sum, x) => sum + x, 0) - 4 * Math.PI) < 1e-9);
});

test("the shared March graph and solution-only illustrations reach the intended entries", () => {
  const march = imported.filter(q => q.source.competition === "2025 March Regional");
  for (const n of [22, 23, 24]) {
    assert.equal(march.find(q => q.source.questionNumber === n).illustration.src,
      "/questions/alpha-2025-mar-22-24.svg");
  }
  assert.match(march.find(q => q.source.questionNumber === 23).question, /continuity from within the domain/);
  assert.equal(new Set(imported.flatMap(q => q.illustration ? [q.illustration.src] : [])).size, 7);
  const solutionMarkers = imported.flatMap(q => [...q.solution.matchAll(/\[\[solution-diagram:(alpha-2025-[\w-]+)\]\]/g)].map(m => m[1]));
  assert.deepEqual(solutionMarkers.sort(), ["alpha-2025-feb-3", "alpha-2025-feb-5", "alpha-2025-feb-8", "alpha-2025-king-17", "alpha-2025-mar-30"]);
});
