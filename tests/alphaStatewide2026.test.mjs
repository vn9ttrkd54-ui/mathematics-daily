import assert from "node:assert/strict";
import test from "node:test";
import katex from "katex";
import { alphaQuestions } from "../data/questions/alpha.ts";
import { muQuestions } from "../data/questions/mu.ts";
import { thetaQuestions } from "../data/questions/theta.ts";

const jan = alphaQuestions.filter(q => q.id >= 20331 && q.id <= 20360);
const king = alphaQuestions.filter(q => q.id >= 20361 && q.id <= 20390);
const imported = [...jan, ...king];
const near = (a, b, tolerance = 1e-9) => assert.ok(Math.abs(a - b) < tolerance, `${a} != ${b}`);
const sum = values => values.reduce((a, b) => a + b, 0);
const deg = Math.PI / 180;
const c = (re, im = 0) => [re, im];
const mul = ([a, b], [d, e]) => c(a * d - b * e, a * e + b * d);
const add = ([a, b], [d, e]) => c(a + d, b + e);
const pow = (z, n) => Array.from({length: n}).reduce(a => mul(a, z), c(1));
const div = (z, [a, b]) => mul(z, c(a / (a * a + b * b), -b / (a * a + b * b)));

test("both supplied Statewide papers retain all 30 originals and their checked answer keys", () => {
  for (const [qs, first, number, competition, key] of [
    [jan, 20331, 268, "2026 January Statewide", "DDEDBCAAAB" + "BBCDCADCCA" + "BDDAACADAD"],
    [king, 20361, 298, "2026 King February Statewide", "BACACDDADB" + "BACBADDCCD" + "DACCBBCCDD"],
  ]) {
    assert.equal(qs.length, 30);
    assert.deepEqual(qs.map(q => q.id), Array.from({length: 30}, (_, i) => first + i));
    assert.deepEqual(qs.map(q => q.number), Array.from({length: 30}, (_, i) => number + i));
    assert.equal(qs.map(q => q.answer).join(""), key);
    for (const [i, q] of qs.entries()) {
      assert.deepEqual(q.source, { competition, event: "Precalculus Individual", questionNumber: i + 1 });
      assert.equal(q.division, "Alpha");
      assert.equal(q.choices.length, 5);
      assert.ok(q.solution.trim(), "explanation for " + q.id);
    }
  }
});

test("new labels reuse the established vocabulary and calibrated 1–5 scale", () => {
  const previous = [...muQuestions, ...thetaQuestions, ...alphaQuestions.filter(q => q.id <= 20330)];
  const topics = new Set(previous.map(q => q.topic));
  const methods = new Set(previous.flatMap(q => q.methods));
  for (const q of imported) {
    assert.ok(topics.has(q.topic), q.topic);
    assert.ok(Number.isInteger(q.difficulty) && q.difficulty >= 1 && q.difficulty <= 5);
    assert.equal(new Set(q.methods).size, q.methods.length);
    for (const method of q.methods) assert.ok(methods.has(method), method);
    if (q.methods.some(m => /^(Double-Angle|Half-Angle|Product-to-Sum|Sum-to-Product) Identity$/.test(m))) {
      assert.ok(!q.methods.includes("Trigonometric Identities"));
    }
  }
  assert.ok(king[0].difficulty < king[20].difficulty);
  assert.ok(king[7].difficulty < king[22].difficulty);
  assert.ok(jan[3].difficulty < jan[16].difficulty);
});

test("all imported problem, answer, and solution formulas compile with KaTeX", () => {
  const delimiter = /\\\[([\s\S]*?)\\\]|\\\(([\s\S]*?)\\\)/g;
  for (const q of imported) {
    for (const text of [q.question, ...q.choices, q.solution]) {
      assert.doesNotMatch(text.replace(delimiter, ""), /\\/, "unmatched math in " + q.id);
      for (const match of text.matchAll(delimiter)) {
        assert.doesNotThrow(() => katex.renderToString(match[1] ?? match[2], {
          displayMode: match[1] !== undefined, throwOnError: true, strict: "error",
        }), "formula in " + q.id);
      }
    }
  }
});

test("January answers agree with independent arithmetic, domains, and geometric calculations", () => {
  // 1–7: evaluate roots, half-lives, principal inverse values, arc and intersection.
  const roots = [1, 5, 7, 11].map(n => n * Math.PI / 6);
  for (const x of roots) near(3 * Math.tan(x) ** 2, 1);
  near(sum(roots), 4 * Math.PI);
  near(100 * 2 ** (-3), 12.5);
  near(Math.asin(-Math.cos(Math.PI / 7)) / Math.PI, -5 / 14);
  assert.equal(210 + 330, 540);
  near(Math.cos(9 * Math.PI / 12), -Math.SQRT1_2);
  near(Math.log2(4 - 1), Math.log2(4 + 2) - 1);
  near(Math.sin(Math.acos(2 / Math.sqrt(10)) - Math.atan(-1 / 3)), (2 + 3 * Math.sqrt(6)) / 10);
  // 8–14: sample the waveform, conic, area, ordering, growth, and all roots.
  const temp = t => -11 * Math.sin(Math.PI * (t + 4) / 12) + 53;
  near(temp(2), 42); near(temp(14), 64); assert.equal(11 + 4 + 4 + 53, 72);
  const combined = x => 3 * Math.sin(3 * x - Math.PI / 3) + 4 * Math.cos(3 * x + Math.PI / 6) + 6;
  near(combined(Math.PI / 9 + Math.PI / 6) - combined(Math.PI / 9 - Math.PI / 6), -2);
  near(4 * 0 ** 2 - 1 ** 2 - 16 * 0 - 2 * 1 + 3, 0);
  near(50 * Math.sin(30 * deg) * Math.sin(45 * deg) / Math.sin(105 * deg), 25 * (Math.sqrt(3) - 1));
  for (const x of [30, 150]) near(Math.sin(x * deg) + Math.cos(x * deg) / Math.tan(x * deg), 2);
  near(Math.cos((30 - 150) * deg), -0.5);
  const b = (40 / (5 / 8)) ** (1 / 3); near(40 * b ** 1.5, 320);
  const a = Math.asin(1 / 3), all = [];
  for (let k = 0; k < 4; k++) all.push(Math.PI / 2 + 2 * k * Math.PI, a + 2 * k * Math.PI, Math.PI - a + 2 * k * Math.PI);
  for (const t of all) near(3 * Math.cos(t) ** 2 + 4 * Math.sin(t) - 4, 0);
  near(sum(all), 42 * Math.PI);
  // 15: x^-2 witnesses the reflected monotonicity and upward concavity.
  assert.ok((-4) ** -2 < (-3) ** -2); assert.ok(6 / (-3) ** 4 > 0);
  const obtuse = Math.PI - (Math.atan(3) - Math.atan(2)); near(Math.tan(2 * obtuse), -7 / 24);
  near([1, 2, 4, 8].reduce((p, n) => p * Math.cos(n * Math.PI / 17), 1), 1 / 16);
  // 18: the disk's boundary has the required 2:1 distance ratio.
  for (const theta of [0, 1, 2, 3]) {
    const x = 4 + 10 / 3 * Math.cos(theta), y = 16 / 3 + 10 / 3 * Math.sin(theta);
    near(Math.hypot(x, y), 2 * Math.hypot(x - 3, y - 4));
  }
  assert.deepEqual([1 / 60, 1 / 20, 1 / 15, 1 / 12].map(b => Math.round(60 * b) % 2), [1, 1, 0, 1]);
  near(Math.log2((-3) ** 2 + 3), Math.log2(3) + Math.log2(4));
  for (const x of [-10, -1, 0, 1, 10]) near(Math.sin(2 * Math.atan(x / 2)), 4 * x / (x * x + 4));
  let factorial = 1, series = 0;
  for (let n = 1; n <= 25; n++) { factorial *= n; series += (-1) ** (n + 1) / factorial; }
  near(series, 1 - 1 / Math.E);
  for (const theta of [0.3, 1, 2, 4, 5]) {
    const x = 1 - 2 / Math.sin(theta), y = 3 / Math.tan(theta);
    near(9 * x * x - 4 * y * y - 18 * x, 27);
  }
  // 24: independently solve Mv=1 by elimination; sum(v) is the inverse-entry sum.
  const rows = [[2, 0, 2, 1], [-3, -1, -3, 1], [2, 6, 5, 1]];
  for (let pivot = 0; pivot < 3; pivot++) {
    const d = rows[pivot][pivot]; rows[pivot] = rows[pivot].map(x => x / d);
    for (let k = 0; k < 3; k++) if (k !== pivot) {
      const factor = rows[k][pivot]; rows[k] = rows[k].map((x, j) => x - factor * rows[pivot][j]);
    }
  }
  near(sum(rows.map(row => row[3])), -2);
  near(Math.sin(50 * deg) * Math.sin(10 * deg), 0.5 * Math.cos(40 * deg) - 0.25);
  // 26: cusps are separated by pi/3 in t; a whole cycle is pi, not pi/2.
  const point = t => c(2 * Math.cos(2 * t) + Math.cos(4 * t), 2 * Math.sin(2 * t) - Math.sin(4 * t));
  near(point(0)[0], 3); near(point(Math.PI / 3)[0], -1.5);
  near(point(Math.PI / 3)[1], 3 * Math.sqrt(3) / 2);
  near(point(0.27)[0], point(0.27 + Math.PI)[0]);
  assert.ok(Math.abs(point(0)[0] - point(Math.PI / 2)[0]) > 1);
  const bank = 1000 * (1 + 0.05 / 365) ** 3650;
  const distances = [1000 * Math.sqrt(Math.E), 1000 * 1.05 ** 10, 1000 * Math.exp(73 / 40), 1500].map(x => Math.abs(x - bank));
  assert.equal(distances.indexOf(Math.min(...distances)), 0); assert.ok(distances[0] < 0.06);
  const p = 7 * Math.PI / 9, odd = x => 4 * Math.cos(3 * (x + p) + Math.PI / 6);
  for (const x of [0, 0.6, 2]) near(odd(x) + odd(-x), 0);
  assert.ok(4 * Math.PI / 9 - 2 < 0 && p - 2 > 0);
  for (const x of [0, Math.log(2) / Math.log(3) - 3]) near(27 ** (x + 1) - 3 ** (x + 3), 2 * (9 ** x - 1));
  for (let n = -3; n <= 3; n++) near(Math.sin(Math.PI * (2 * n + 2 / 3) / 2 - Math.PI / 3), 0);
});

test("King answers agree with independent enumeration, algebra, and area calculations", () => {
  // 1–9, including an explicit conditional sample space and exhaustive square count.
  near([2, 3, 4, 5].reduce((x, y) => 1 / x + 1 / y, 1), 1);
  assert.ok(4 ** 2 + 7 ** 2 > 8 ** 2);
  for (const m of [-0.01, -0.5, -0.99]) {
    const x = 1 / Math.sqrt(1 + m * m), y = m * x;
    near((-x) ** 2 + y ** 2, 1); near(x + y - x - y, 0); assert.ok(x > -y && -y > 0);
  }
  const starts = Array.from({length: 7}, (_, i) => i);
  const weekdays = start => Array.from({length: 31}, (_, day) => (start + day) % 7);
  const fiveSundays = starts.filter(start => weekdays(start).filter(d => d === 0).length === 5);
  near(fiveSundays.filter(start => weekdays(start).filter(d => d === 6).length === 5).length / fiveSundays.length, 2 / 3);
  assert.deepEqual(Array.from({length: 68}, (_, i) => (i + 32) ** 2).filter(n => n % 1000 === 25), [2025, 3025, 9025]);
  near((4 + 5 + 6) / 6, 2.5);
  near((15 - 9) / Math.log10(6), 6 / Math.log10(6));
  near(Math.sin(75 * deg) / Math.sin(45 * deg), (Math.sqrt(3) + 1) / 2);
  const lengths = [3, 4, 2, 4, 2, 4];
  near(Math.hypot(sum(lengths.map((d, i) => d * Math.cos(-i * Math.PI / 3))), sum(lengths.map((d, i) => d * Math.sin(-i * Math.PI / 3)))), 1);
  const z = div(mul(pow(c(1, 2), 5), pow(c(2, 1), 4)), mul(pow(c(1, -2), 3), pow(c(2, -1), 4)));
  near(z[0], 5); near(z[1], 0);
  // 13: only one cosine sign permits an acute positive difference.
  const validCosDifferences = [-0.6, 0.6].map(x => x + 0.2).filter(x => x > 0);
  assert.equal(validCosDifferences.length, 1); near(Math.sqrt(1 - validCosDifferences[0] ** 2), 0.6);
  assert.equal(sum(Array.from({length: 15}, (_, i) => { const k = i + 5; return k * k + k * (k + 1) + (k + 1) ** 2; })), 7875);
  const theta = Math.acos(Math.sqrt(0.8)); near(Math.cos(theta) ** 4 + Math.sin(theta) ** 4, 17 / 25);
  near(Math.cos(theta) ** 4 - Math.sin(theta) ** 4, 0.6);
  const height = Math.sqrt(7 ** 2 - 2 ** 2); near(Math.hypot(height, 6), 9); near(12 * height, 36 * Math.sqrt(5));
  const phi = Math.acos(0.25), t = Math.PI / 4 - phi;
  near(Math.sin(t) + Math.sin(t + 2 * phi) + Math.cos(t) + Math.cos(t + 2 * phi), Math.SQRT1_2);
  const xs = Array.from({length: 289}, (_, i) => i + 1).filter(x => Number.isInteger(Math.sqrt(7 * x + 1)) && 7 * x + 1 < 2025);
  assert.equal(sum(xs), 1274);
  const sin2A = 0.75, hypotenuseSquared = 60 * 4 / sin2A;
  near(hypotenuseSquared / 4, 80);
  let logSum = 0; for (let i = 0; i <= 10; i++) for (let j = 0; j <= 10; j++) logSum += 2 ** (10 + i - j);
  near(logSum, (2 ** 11 - 1) ** 2);
  // 21: solve both original roots numerically, then test the sum/product identity.
  const h = x => Math.exp(x / 3) - 3 * Math.log(x);
  function root(lo, hi) { for (let n = 0; n < 70; n++) { const mid = (lo + hi) / 2; if (h(lo) * h(mid) <= 0) hi = mid; else lo = mid; } return (lo + hi) / 2; }
  const a = root(1, 3), b = root(3, 8);
  near(Math.exp((a + b) / 3), a * b);
  // 22–25: semiperimeter lengths, all three reflection cases, and Heron/half-angle.
  assert.equal((7 + 8 + 9) / 2 - 9, 3);
  const radii = [12 / 9, 12 / 8, 12 / 7]; near(Math.max(...radii), 12 / 7);
  near(12 / 7 / 3 + 12 / 7 / 4, 1);
  const inradiusSquared = (12 * 5 * 4 * 3) / 12 ** 2;
  near(2 * (inradiusSquared + 25) - (inradiusSquared + 9) - (inradiusSquared + 16), 25);
  for (const [a, b, c] of [[3, 4, 5], [7, 8, 9]]) {
    const s = (a + b + c) / 2, C = Math.acos((a * a + b * b - c * c) / (2 * a * b));
    near(Math.sqrt(s * (s - c) / ((s - a) * (s - b))), 1 / Math.tan(C / 2));
  }
  // 26: integrate the polar disk r <= 4 cos(theta), independently of the sector split.
  const count = 10000, step = (Math.PI / 4) / count;
  const area = sum(Array.from({length: count}, (_, i) => 8 * Math.cos(-Math.PI / 8 + (i + 0.5) * step) ** 2 * step));
  near(area, Math.PI + 2 * Math.sqrt(2), 1e-8);
  function difference(values) { return values.slice(1).map((x, i) => x - values[i]); }
  for (const [degree, fn, constant] of [[3, x => x ** 3, 6], [6, x => 2 * x ** 6 + x ** 5 + 2 * x + 1, 1440]]) {
    let values = Array.from({length: 12}, (_, i) => fn(i));
    for (let n = 0; n < degree; n++) { assert.ok(new Set(values).size > 1); values = difference(values); }
    assert.deepEqual([...new Set(values)], [constant]);
  }
  let denominatorSum = c(0);
  for (const x of [c(1), c(0.5, Math.sqrt(3) / 2), c(0.5, -Math.sqrt(3) / 2)]) {
    const numerator = add(pow(x, 6), c(-1)); near(numerator[0], 0); near(numerator[1], 0);
    const denominator = add(add(pow(x, 3), mul(c(2), pow(x, 2))), add(mul(c(2), x), c(1)));
    assert.ok(Math.hypot(...denominator) > 0); denominatorSum = add(denominatorSum, denominator);
  }
  near(denominatorSum[0], 6); near(denominatorSum[1], 0);
  const coefficients = Array(11).fill(0);
  for (let j = 1; j <= 5; j++) for (let k = 1; k <= 5; k++) coefficients[j + k]++;
  assert.equal(sum(coefficients.map((a, n) => n * a)), 150);
});

test("standalone questions retain shared context, figure credit, and necessary clarifications", () => {
  for (const q of king.slice(2, 5)) assert.match(q.question, /x_1>y_2>0/);
  for (const q of king.slice(21, 25)) {
    assert.match(q.question, /Wolfram MathWorld/);
    assert.equal(q.illustration.src, "/questions/alpha-king-statewide-2026-incircle.svg");
  }
  for (const q of king.slice(26, 28)) assert.match(q.question, /f_n\(x\)=f_\{n-1\}/);
  assert.match(king[5].question, /equally likely/);
  assert.match(king[25].question, /between the rays/);
  assert.match(king[28].question, /allowing complex/);
  assert.match(king[24].solution, /credit Vignesh Saravanan/);
  assert.match(jan[11].solution, /alpha=30/);
  assert.match(jan[27].solution, /g\(x\)\+g\(-x\)=0/);
  assert.match(king[12].solution, /cos\(a-b\)=-3/);
});
