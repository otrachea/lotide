const assert = require("chai").assert;
const without = require("../without");

describe("#without", () => {
  
  it("returns correct output", () => {
    assert.deepEqual(without([1, 2, 2, 3, 1, 5], [1, 3]), [2, 2, 5]);
  });
  
  it("returns correct output", () => {
    assert.deepEqual(without([1, 2, 2, 3, 1, 5], []), [1, 2, 2, 3, 1, 5]);
  });

  it("returns correct output", () => {
    assert.deepEqual(without([1, 2, 2, 3, 1, 5], [5]), [1, 2, 2, 3, 1]);
  });

  it("returns correct output", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });

  it("returns correct output", () => {
    assert.deepEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"]);
  });

});
