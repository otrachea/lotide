const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const assertArraysEqual = (arr1, arr2) => {
  (eqArrays(arr1, arr2)) ?
    console.log(`✅ Assertion Passed, ${arr1} === ${arr2}`) :
    console.log(`🛑 Assertion Failed, ${arr1} !== ${arr2}`);
};

const without = (source, values) => {
  let result = [];
  source.forEach(element => {
    if (!values.includes(element)) result.push(element);
  });
  return result;
};

assertArraysEqual(without([1, 2, 2, 3, 1, 5], [1, 3]), [2, 2, 5]);
assertArraysEqual(without([1, 2, 2, 3, 1, 5], []), [1, 2, 2, 3, 1, 5]);
assertArraysEqual(without([1, 2, 2, 3, 1, 5], [5]), [1, 2, 2, 3, 1]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
