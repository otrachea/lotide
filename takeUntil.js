const takeUntil = function(array, callback) {

  const results = [];
  for (const element of array) {
    if (callback(element)) return results;

    results.push(element);
  }

  return results;
};

module.exports = takeUntil;
