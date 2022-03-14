const assert = require("chai").assert;
const countOnly = require("../countOnly");

describe("#countOnly", () => {

  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];

  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

  it(`result1["Jason"] returns 1`, () => {
    assert.equal(result1["Jason"], 1);
  });

  it(`result1["Karima"] is undefined`, () => {
    assert.isUndefined(result1["Karima"]);
  });

  it(`result1["Fang"] returns 2`, () => {
    assert.equal(result1["Fang"], 2);
  });

  it(`result1["Agouhanna"] is undefined`, () => {
    assert.isUndefined(result1["Agouhanna"]);
  });

});
