const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🍏🍏🍏 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🍎🍎🍎 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const tail = function(array) {
  const newArray = array.slice(1);
  return newArray;
};

const words = [0, 1, 2, 3, 4];
console.log(tail(words));
assertEqual(words.length, 0);