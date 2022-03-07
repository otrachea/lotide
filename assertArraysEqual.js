const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const assertArraysEquals = (arr1, arr2, expected) => {
  (eqArrays(arr1, arr2) === expected) ?
    console.log(`✅ Assertion Passed, eqArrays returns that ${arr1} ${expected ? '===' : '!=='} ${arr2}`) :
    console.log(`🛑 Assertion Failed, eqArrays returns that ${arr1} ${expected ? '===' : '!=='} ${arr2}`);
};

assertArraysEquals([1, 2, 3], [1, 2, 3], true);
assertArraysEquals([2, 1], [1, 2], false);
assertArraysEquals([1, 2, 3], [1, 2, 3], false);
assertArraysEquals([2, 1], [1, 2], true);