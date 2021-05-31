const takeUntil = function(array, callback) {
  const finalArray = [];
  for (let element of array) {
    if (callback(element)) {
      break;
    }
    finalArray.push(element);
  }
  return finalArray;
};


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

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// assertArraysEqual(results1, [1,2,5,7,2]);
// assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]);
module.exports = takeUntil;