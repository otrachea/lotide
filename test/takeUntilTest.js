const assert = require("chai").assert;
const takeUntil = require("../takeUntil");

describe("#takeUntil", () => {
  it("returns [1, 2, 5, 7, 2]", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const results1 = takeUntil(data1, x => x < 0);
    assert.deepEqual(results1, [1, 2, 5, 7, 2]);
  })

  it("returns ['I've', 'been', 'to', 'Hollywood']", () => {
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const results2 = takeUntil(data2, x => x === ',');
    assert.deepEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);
  })
});
