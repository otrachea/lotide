const assertEqual = function(actual, expected) {
  (actual === expected) ?
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const tail = (arr) => {
  return arr.slice(1);
};

const result = tail(['a', 'b', 'c', 'd']);
assertEqual(result.length, 3);
assertEqual(result[0], 'b');
assertEqual(result[1], 'c');
assertEqual(result[2], 'd');

const arr1 = [1, 2, 3, 4];
const arr1copy = arr1;
assertEqual(arr1, arr1copy);
assertEqual(arr1.length, 4);

assertEqual(tail([1]).length, 0);
assertEqual(tail([]).length, 0);