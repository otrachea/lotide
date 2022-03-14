const assert = require("chai").assert;
const map = require("../map");

describe("#map", () => {
  
  const words = ["ground", "control", "to", "major", "tom"];
  const results1 = map(words, word => word[0]);

  it("returns ['g', 'c', 't', 'm', 't']", () => {
    assert.deepEqual(results1, ['g', 'c', 't', 'm', 't']);
  });

  it("returns [1, 4, 9, 16, 25])", () => {
    assert.deepEqual(map([1, 2, 3, 4, 5], num => num * num), [1, 4, 9, 16, 25]);
  });

  it("returns [0, -1, -2, -3, -4]", () => {
    assert.deepEqual(map([5, 4, 3, 2, 1], num => num - 5), [0, -1, -2, -3, -4]);
  })

});
