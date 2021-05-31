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
    console.log(`🍏🍏🍏 Correct! ${array1} === ${array2}`);
  } else {
    console.log(`🍎🍎🍎 Incorrect! ${array1} !== ${array2}`);
  }
};

const flatten = function(array) {
  const finalArray = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      for (let nestedElement of element) {
        finalArray.push(nestedElement);
      }
    } else {
      finalArray.push(element);
    }
  }
  return finalArray;
};


// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
module.exports = flatten;