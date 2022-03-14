const countOnly = (arr, obj) => {
  
  let elementCounter = {};
  let result = {};

  for (let element of arr) {
    if (!(element in elementCounter)) {
      elementCounter[element] = 0;
    }
    elementCounter[element]++;
  }

  for (let element in elementCounter) {
    if (Object.hasOwnProperty.call(elementCounter, element)) {
      if (element in obj && obj[element]) {
        result[element] = elementCounter[element];
      }
    }
  }

  return result;
};

module.exports = countOnly;
