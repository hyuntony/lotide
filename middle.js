const middle = function(array) {
  const result = [];
  if (array.length < 3) {
    return result;
  }
  if (array.length % 2 === 1) {
    const i = (array.length / 2) - 0.5;
    result.push(array[i]);
    return result;
  } else if (array.length % 2 === 0) {
    const i = array.length / 2;
    result.push(array[i - 1], array[i]);
    return result;
  }
};

module.exports = middle;