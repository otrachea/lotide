import { assertArraysEqual } from "./assertArraysEqual.js";

const without = (source, values) => {
  let result = [];
  source.forEach(element => {
    if (!values.includes(element)) result.push(element);
  });
  return result;
};

assertArraysEqual(without([1, 2, 2, 3, 1, 5], [1, 3]), [2, 2, 5]);
assertArraysEqual(without([1, 2, 2, 3, 1, 5], []), [1, 2, 2, 3, 1, 5]);
assertArraysEqual(without([1, 2, 2, 3, 1, 5], [5]), [1, 2, 2, 3, 1]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
