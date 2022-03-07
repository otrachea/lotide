const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const assertArraysEquals = (arr1, arr2) => {
  (eqArrays(arr1, arr2)) ?
    console.log(`✅ Assertion Passed, ${arr1} === ${arr2}`) :
    console.log(`🛑 Assertion Failed, ${arr1} !== ${arr2}`);
};

assertArraysEquals([1, 2, 3], [1, 2, 3]);
assertArraysEquals([1, 2], [1, 2]);
assertArraysEquals([1, 2, 5], [1, 2, 3]);
assertArraysEquals([2, 1], [1, 2]);