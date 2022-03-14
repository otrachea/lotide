const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2], [1, 2]);
assertArraysEqual([1, 2, 5], [1, 2, 3]);
assertArraysEqual([2, 1], [1, 2]);