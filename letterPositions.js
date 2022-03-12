import { assertArraysEqual } from "./assertArraysEqual.js";

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (!(sentence[i] in results)) {
      results[sentence[i]] = [];
    }
    results[sentence[i]].push(i);
  }

  return results;
};

const result1 = letterPositions('hello');
assertArraysEqual(result1['h'], [0]);
assertArraysEqual(result1['e'], [1]);
assertArraysEqual(result1['l'], [2, 3]);
assertArraysEqual(result1['o'], [4]);
