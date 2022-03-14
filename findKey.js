const findKey = (obj, callback) => {

  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {

      if (callback(obj[key])) return key;
    }
  }

  return undefined;
};

module.exports = findKey;
