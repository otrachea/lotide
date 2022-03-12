import { assertArraysEqual } from "./assertArraysEqual.js";

const map = (arr, callback) => {

  const results = [];
  for (let item of arr) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't'])

const test1 = [1, 2, 3, 4, 5];
assertArraysEqual(map(test1, num => num * num), [1, 4, 9, 16, 25]);

assertArraysEqual(map([5, 4, 3, 2, 1], num => num - 5), [0, -1, -2, -3, -4]);