import assert from "node:assert/strict";
import test from "node:test";
import { alphaQuestions } from "../data/questions/alpha.ts";
import { muQuestions } from "../data/questions/mu.ts";
import { thetaQuestions } from "../data/questions/theta.ts";

const papers = [
  ["2023 January Regional", 10682, "DDBBCBDACCCCEAACBEAACBBEDBBBBA"],
  ["2023 February Regional", 10712, "CCBBADDECCBBBEBEADBCABBDAACBBB"],
  ["2023 February NSU Statewide", 10742, "CACABDCECAADECBBBACCCACCBAEBCB"],
  ["2023 March Regional", 10772, "CDDCDAAABAADCDDBCDBACCCBBBADDA"],
  ["2023 March Statewide", 10802, "DCCDEBBAABACADDCBCECBACCDDDBAB"],
];
const previous = [...muQuestions.filter(q => q.id < 10682), ...alphaQuestions, ...thetaQuestions];
const topics = new Set(previous.map(q => q.topic));
const methods = new Set(previous.flatMap(q => q.methods));
const byId = new Map(muQuestions.map(q => [q.id, q]));

for (const [competition, firstId, key] of papers) {
  test(competition + " preserves source numbers, reviewed answers and bank labels", () => {
    const questions = muQuestions.filter(q => q.source?.competition === competition && q.source.event === "Calculus Individual");
    assert.equal(questions.map(q => q.answer).join(""), key);
    for (const [i, q] of questions.entries()) {
      assert.equal(q.source.questionNumber, i + 1);
      assert.equal(q.id, firstId + i);
      assert.equal(q.number, q.id - 10123);
      assert.equal(q.choices.length, 5);
      assert.equal(q.choices[4], "NOTA");
      assert.ok(q.difficulty >= 1 && q.difficulty <= 5 && Number.isInteger(q.difficulty));
      assert.ok(topics.has(q.topic), q.topic);
      for (const method of q.methods) assert.ok(methods.has(method), method);
    }
  });
}

test("NSU bounds, infinite product and series agree independently with the reviewed keys", () => {
  const near = (actual, expected) => assert.ok(Math.abs(actual - expected) < 1e-8);
  const selected = id => {
    const q = byId.get(id);
    return q.choices["ABCDE".indexOf(q.answer)];
  };
  const radical = Math.sqrt(Math.PI ** 2 + 36);
  const lower = (radical - Math.PI) / 6;
  const upper = (radical + Math.PI) / 6;
  near(lower * upper, 1);
  const step = (upper - lower) / 10000;
  let area = 0;
  for (let i = 0; i < 10000; i++) {
    const x = lower + (i + 0.5) * step;
    area += step * Math.cos(x - 1 / x);
  }
  near(area, Math.sqrt(3) / 2);
  assert.match(selected(10755), /\\sqrt3/);
  let product = 1;
  let sum = 0;
  let term = 3;
  for (let n = 1; n <= 60; n++) {
    product *= Math.cos(Math.PI / 2 ** (n + 1));
    sum += 1 / term;
    term *= 2;
  }
  near(product, 2 / Math.PI);
  near(sum, 2 / 3);
  assert.match(selected(10761), /\\frac2\\pi/);
  assert.equal(selected(10768), "NOTA");
  assert.match(byId.get(10768).solution, /2\/3/);
});

test("continuous-density and improper-integral answers retain the counterexamples", () => {
  const density = byId.get(10785);
  assert.equal(density.choices["ABCDE".indexOf(density.answer)], "Not enough information");
  assert.match(density.solution, /triangular peak/);
  const tangent = byId.get(10806);
  assert.equal(tangent.answer, "E");
  assert.match(tangent.question, /ordinary improper integral/);
  assert.match(tangent.solution, /simple pole/);
  assert.match(tangent.solution, /diverge/);
});
