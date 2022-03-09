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
