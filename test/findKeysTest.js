const assert = require("chai").assert;
const findKey = require("../findKey");

describe("#findKey", () => {
  it("returns key of first occurance of value", () => {
    assert.equal(findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri": { stars: 3 },
      "noma": { stars: 2 },
      "elBulli": { stars: 3 },
      "Ora": { stars: 2 },
      "Akelarre": { stars: 3 }
    }, x => x.stars === 2), "noma");
  });

  it("returns correct key", () => {
    assert.equal(findKey({ a: 1, b: 2, c: 3, d: 4 }, x => x === 2), 'b');
  });

  it("returns undefined if no value satisfy equation", () => {
    assert.isUndefined(findKey({ a: 1, b: 2, c: 3, d: 4 }, x => x === 5));
  });

  it("returns correct key", () => {
    assert.equal(findKey({
      'barney': { 'age': 36, 'active': true },
      'fred': { 'age': 40, 'active': false },
      'pebbles': { 'age': 1, 'active': true }
    }, o => o.age < 48), 'barney');
  });
  
});
