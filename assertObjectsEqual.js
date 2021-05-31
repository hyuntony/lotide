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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key of Object.keys(object1)) {
      if (typeof object1[key] === 'object') {
        if (eqArrays(object1[key], object2[key]) === false) {
          return false;
        }
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
    return true;
  } else {
    return false;
  }
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const result = eqObjects(actual, expected);
  if (result) {
    console.log(`🍏🍏🍏 ${inspect(actual)} object matches with ${inspect(expected)} object`);
  } else {
    console.log(`🍎🍎🍎 ${inspect(actual)} object does not match with ${inspect(expected)} object`);
  }
};
// const obj1 = { a: 2 };
// const obj2 = { a: 3 };
// assertObjectsEqual(obj1, obj2);

module.exports = assertObjectsEqual;