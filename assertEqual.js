const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🍏🍏🍏 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🍎🍎🍎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual("hello", "hello");
// assertEqual(1, 1);
// assertEqual(-3, 0);
// const first = 3;
// const second = 3;
// assertEqual(first, second);

module.exports = assertEqual;