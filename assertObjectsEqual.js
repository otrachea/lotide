import { eqObjects } from './eqObjects.js';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  (eqObjects(actual, expected)) ?
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) :
    console.log(`🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc)
