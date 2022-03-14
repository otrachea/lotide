const countLetters = (str) => {

  str = str.toLowerCase();
  let counter = {};
  
  for (let char of str.split('')) {
    if (!(char in counter)) {
      counter[char] = 0;
    }
    counter[char]++;
  }
  return counter;
};

module.exports = countLetters;
