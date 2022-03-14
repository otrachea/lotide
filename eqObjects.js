const eqArrays = require("./eqArrays");

const eqObjects = (obj1, obj2) => {
  // different number of keys
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

  for (const key in obj1) {
    if (Object.hasOwnProperty.call(obj1, key)) {

      // key is not in obj2
      if (!(key in obj2)) return false;

      // value for key is array
      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
        return eqArrays(obj1[key], obj2[key]);
      }

      // object check
      if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
        return eqObjects(obj1[key], obj2[key]);
      }
      // primitive data type check
      if (obj1[key] !== obj2[key]) return false;

    }
  }

  return true;
};

module.exports = eqObjects;
