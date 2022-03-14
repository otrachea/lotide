const assert = require("chai").assert;
const eqObjects = require("../eqObjects");

describe("#eqObjects", () => {

  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  const abc = { a: "1", b: "2", c: "3" };
  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  const cd2 = { c: "1", d: ["2", 3, 4] };

  it("returns true when object keys initalized in different order: ab, ba", () => {
    assert.isTrue(eqObjects(ab, ba))
  });

  it("returns false for ab, abc", () => {
    assert.isFalse(eqObjects(ab, abc));
  });

  it("returns true when values are different data types: cd, dc", () => {
    assert.isTrue(eqObjects(cd, dc));
  });

  it("returns false for cd, cd2", () => {
    assert.isFalse(eqObjects(cd, cd2));
  })

  it("returns true of nested objects", () => {
    assert.isTrue(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });

  it("returns false for incorrect nested objects", () => {
    assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });

  it("returns false for incorrect ntested objects", () => {
    assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }));
  });

});
