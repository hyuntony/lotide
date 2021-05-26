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

// middle function expression passing in an array
const middle = function(array) {
  // declare result variable and assign empty array
  const result = [];
  // if array.length is less than 3 return result variable
  if (array.length < 3) {
    return result;
  }
  // if array.length % 2 === 1
  if (array.length % 2 === 1) {
    // variable i equals array.length / 2 - 0.5
    const i = (array.length / 2) - 0.5;
    // push array[i] into result array
    result.push(array[i]);
    return result;
    // else if array length % 2 === 0
  } else if (array.length % 2 === 0) {
    // variable i equals array.length / 2
    const i = array.length / 2;
    // push array[i-1] and array[i] into result array
    result.push(array[i - 1], array[i]);
    // return result array
    return result;
  }
};
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);