const assert = require("chai").assert;
const eqArrays = require("../eqArrays");

describe("#eqArrays", () => {
  it("eqArrays([1, 2, 3], [1, 2, 3]) returns true", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });

  it("eqArrays([1, 2, 3], [3, 2, 1]) returns false", () => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]));
  });

  it(`eqArrays(["1", "2", "3"], ["1", "2", "3"]) returns true`, () => {
    assert.isTrue(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
  });

  it(`eqArrays(["1", "2", "3"], ["1", "2", 3])`, () => {
    assert.isFalse(eqArrays(["1", "2", "3"], ["1", "2", 3]));
  });

});
