const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🍏🍏🍏 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🍎🍎🍎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  // declare empty obj named finalObj
  const finalObj = {};
  // loop through str
  for (let char of str) {
    if (char !== " ") {
      if (finalObj[char]) {
        finalObj[char] += 1;
      } else {
        finalObj[char] = 1;
      }
    }
  }
  return finalObj;
};

const result = countLetters("lighthouse in the house");
assertEqual(result["h"], 4);