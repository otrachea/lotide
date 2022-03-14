const without = (source, values) => {
  let result = [];
  source.forEach(element => {
    if (!values.includes(element)) result.push(element);
  });
  return result;
};

module.exports = without;