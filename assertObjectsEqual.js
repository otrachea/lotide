const eqObjects = require("./eqObjects.js");

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  (eqObjects(actual, expected)) ?
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) :
    console.log(`🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

module.exports = assertObjectsEqual;