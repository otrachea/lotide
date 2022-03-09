const assertEqual = function(actual, expected) {
  (actual === expected) ?
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = (str) => {

  str = str.toLowerCase();
  let counter = {};
  
  for (let char of str.split('')) {
    if (!(char in counter)) {
      counter[char] = 0;
    }
    counter[char]++;
  }
  return counter;
};

let result1 = countLetters('LHL');
assertEqual(result1['l'], 2);
assertEqual(result1['h'], 1);
