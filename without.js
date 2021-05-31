const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  const result = eqArrays(array1, array2);
  if (result) {
    console.log("correct!");
  } else {
    console.log("No match!");
  }
};

const without = function(source, itemsToRemove) {
  const finalArray = [];
  for (let element of source) {
    for (let i = 0; i < itemsToRemove.length; i++) {
      if (element === itemsToRemove[i]) {
        break;
      }
      if (i === itemsToRemove.length - 1) {
        finalArray.push(element);
      }
    }
  }
  return finalArray;
};

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;