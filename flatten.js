const flatten = (arr) => {
  let result = [];
  arr.forEach(element => {
    if (Array.isArray(element)) {
      element.forEach(inner => {
        result.push(inner);
      });
    } else {
      result.push(element);
    }
  });
  return result;
}

module.exports = flatten;
