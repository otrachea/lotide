const assert = require("chai").assert;
const flatten = require("../flatten");

describe("#flatten", () => {
  it("flatten([]) returns []", () => {
    assert.isEmpty(flatten([]));
  });

  it("flatten([1, [1]]) reutrns [1, 1]", () => {
    assert.deepEqual(flatten([1, [1]]), [1, 1]);
  });

  it("flatten([1, [2, 3, [4], 5]]) returns [1, 2, 3, [4], 5]", () => {
    assert.deepEqual(flatten([1, [2, 3, [4], 5]]), [1, 2, 3, [4], 5]);
  });
});
