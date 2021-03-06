const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🍏🍏🍏 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🍎🍎🍎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//function expression countOnly
const countOnly = function(allItems, itemsToCount) {
  const finalObj = {};
  for (let item of allItems) {
    for (let key in itemsToCount) {
      if (itemsToCount[key] && item === key) {
        if (finalObj[key] === undefined) {
          finalObj[key] = 1;
        } else {
          finalObj[key] += 1;
        }
      }
    }
  }
  return finalObj;
};

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;