const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🍏🍏🍏 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🍎🍎🍎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// function expression eqArrays pass in array1 and array2 as arguments
const eqArrays = function(array1, array2) {
  // if array1 length and array2 length does not match return false
  if (array1.length !== array2.length) {
    return false;
  }
  // loop through each element in the array
  for (let i = 0; i < array1.length; i++) {
    // compare between the same placement elements between array1 and array2
    // if it doesnt match return false
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  // once the loop is finished return true
  return true;
};
// test cases for various scenarios
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);