const assert = require("chai").assert;
const letterPositions = require("../letterPositions");

describe("#letterPositions", () => {

  const result1 = letterPositions('hello');

  it("correct results", () => {
    assert.deepEqual(result1['h'], [0]);
  });

  it("correct results", () => {
    assert.deepEqual(result1['e'], [1]);
  });

  it("correct results", () => {
    assert.deepEqual(result1['l'], [2, 3]);
  });

  it("correct results", () => {
    assert.deepEqual(result1['o'], [4]);
  });

  it("result1 has 5 keys for 'hello'", () => {
    assert.equal(Object.keys(result1).length, 4);
  });
});
