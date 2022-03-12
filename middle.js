import { assertArraysEqual } from "./assertArraysEqual.js";

const middle = (arr) => {
  if (arr.length <= 2) return [];

  if (arr.length % 2 === 1) return [arr[Math.floor(arr.length / 2)]];

  return arr.slice(arr.length / 2 - 1, arr.length / 2 + 1);
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
