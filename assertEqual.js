const assertEqual = function (actual, expected) {
  (actual === expected) ?
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
};

export { assertEqual };

// assertEqual("Bootcamp", "Bootcamp");
// assertEqual(1, 1);