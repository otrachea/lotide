import { eqArrays } from "./eqArrays.js";

const assertArraysEqual = (arr1, arr2) => {
  (eqArrays(arr1, arr2)) ?
    console.log(`✅ Assertion Passed, ${arr1} === ${arr2}`) :
    console.log(`🛑 Assertion Failed, ${arr1} !== ${arr2}`);
};

export { assertArraysEqual };

// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([1, 2], [1, 2]);
// assertArraysEqual([1, 2, 5], [1, 2, 3]);
// assertArraysEqual([2, 1], [1, 2]);