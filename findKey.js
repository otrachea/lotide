const assertEqual = function(actual, expected) {
  (actual === expected) ?
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const findKey = (obj, callback) => {
  
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
    
      if (callback(obj[key])) return key;
    }
  }

  return undefined;
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma"); // => "noma")
assertEqual(findKey({a: 1, b: 2, c: 3, d: 4}, x => x === 2), 'b');
assertEqual(findKey({a: 1, b: 2, c: 3, d: 4}, x => x === 5), undefined);
