const {eqArrays} = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  const result = eqArrays(array1, array2);
  if (result) {
    console.log(`🍏🍏🍏 Correct! ${array1} === ${array2}`);
  } else {
    console.log(`🍎🍎🍎 Incorrect! ${array1} !== ${array2}`);
  }
};


module.exports = assertArraysEqual;