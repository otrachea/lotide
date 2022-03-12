import { assertArraysEqual } from "./assertArraysEqual.js";

const flatten = (arr) => {
  let result = [];
  arr.forEach(element => {
    if (Array.isArray(element)) {
      element.forEach(inner => {
        result.push(inner);
      });
    } else {
      result.push(element);
    }
  });
  return result;
}

assertArraysEqual(flatten([]), []);
assertArraysEqual(flatten([1, [1]]), [1, 1]);
// assertArraysEqual(flatten([1, [2, 3, [4], 5]]), [1, 2, 3, [4], 5]);
