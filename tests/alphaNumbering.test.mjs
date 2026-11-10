import assert from "node:assert/strict";
import test from "node:test";
import { alphaQuestions } from "../data/questions/alpha.ts";

test("Alpha bank labels are unique and sequential without replacing question IDs", () => {
  const numbers = alphaQuestions.map(question => question.number);
  const ids = alphaQuestions.map(question => question.id);
  assert.equal(numbers.length, 327);
  assert.deepEqual(numbers, Array.from({length: numbers.length}, (_, index) => index + 1));
  assert.equal(new Set(ids).size, ids.length);
  assert.deepEqual(ids.slice(88, 147), Array.from({length: 59}, (_, index) => 20091 + index));
  assert.deepEqual(ids.slice(147, 177), Array.from({length: 30}, (_, index) => 20211 + index));
  assert.deepEqual(ids.slice(177, 207), Array.from({length: 30}, (_, index) => 20241 + index));
  assert.deepEqual(ids.slice(207, 237), Array.from({length: 30}, (_, index) => 20271 + index));
  assert.deepEqual(ids.slice(237, 267), Array.from({length: 30}, (_, index) => 20301 + index));
  assert.deepEqual(ids.slice(267), Array.from({length: 60}, (_, index) => 20331 + index));
});
