const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {

  it("tail(['a', 'b', 'c', 'd']) returns ['b', 'c', 'd']", () => {
    assert.deepEqual(tail(['a', 'b', 'c', 'd']), ['b', 'c', 'd']);
  });
  
  it("tail does not mutate the input array", () => {
    const arr1 = [1, 2, 3, 4];
    arr2 = tail(arr1);
    assert.deepEqual(arr1, [1, 2, 3, 4]);
  });

  it("tail([1]) returns []", () => {
    assert.deepEqual(tail([1]), []);
  })

  it("tail([]) returns []", () => {
    assert.deepEqual(tail([]), []);
  })
});
