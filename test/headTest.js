const assert = require("chai").assert;
const head = require("../head");

describe("#head", () => {
  it("head([5, 6, 7]) returns 5", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });

  it(`head(["Hello", "Lighthouse", "Labs"]) returns "Hello"`, () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  it("head([]) returns undefined", () => {
    assert.strictEqual(head([]), undefined);
  });

});
