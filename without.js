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

// function expression named without, with source array and itemsToRemove array passed in as arguments
const without = function(source, itemsToRemove) {
  // define finalArray variable as an empty array
  const finalArray = [];
  // loop through each element in the source array
  for (let element of source) {
    // loop through the elements in the itemsToRemove array
    for (let i = 0; i < itemsToRemove.length; i++) {
      // compare the two elements if there is a match break the loop
      if (element === itemsToRemove[i]) {
        break;
      }
      // if theres no match at the end of the last element of the itemsToRemove array push the element
      // of the source element into finalArray
      if (i === itemsToRemove.length - 1) {
        finalArray.push(element);
      }
    }
  }
  // return finalArray
  return finalArray;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
