const assertEqual = function(actual, expected) {
  (actual === expected) ?
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const countOnly = (arr, obj) => {
  
  let elementCounter = {};
  let result = {};

  for (let element of arr) {
    if (!(element in elementCounter)) {
      elementCounter[element] = 0;
    }
    elementCounter[element]++;
  }

  for (let element in elementCounter) {
    if (Object.hasOwnProperty.call(elementCounter, element)) {
      if (element in obj && obj[element]) {
        result[element] = elementCounter[element];
      }
    }
  }

  return result;

};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
