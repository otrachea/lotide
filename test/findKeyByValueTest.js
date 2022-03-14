const assert = require("chai").assert;
const findKeyByValue = require("../findKeyByValue");

describe("#findKeyByValue", () => {
  
  const bestTVShowsByGenre = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  it("returns correct key", () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("returns undefined when no key is found", () => {
    assert.isUndefined(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));
  });

  it("returns correct key", () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sciFi");
  });

  const test1 = {
    a: 1,
    b: "1"
  };
  
  it("returns correct key", () => {
    assert.equal(findKeyByValue(test1, 1), "a");
  });

  it("returns correct key", () => {
    assert.equal(findKeyByValue(test1, "1"), "b");
  });

});
