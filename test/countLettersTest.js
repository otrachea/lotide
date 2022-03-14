const assert = require("chai").assert;
const countLetters = require("../countLetters");

describe("#countLetters", () => {
  let result1 = countLetters('LHL');
  it("countLetters('LHL')['l'] returns 2", () => {
    assert.equal(result1['l'], 2);
  });

  it("countLetters('LHL')['h'] returns 1", () => {
    assert.equal(result1['h'], 1);
  });

  it("countLetters('LHL') has two keys", () => {
    assert.equal(Object.keys(result1).length, 2);
  });

});
