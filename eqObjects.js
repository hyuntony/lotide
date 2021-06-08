const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key of Object.keys(object1)) {
      if (typeof object1[key] === 'object' && !Array.isArray(object1[key])) {
        if (!eqObjects(object1[key], object2[key])) {
          return false;
        }
      } else if (typeof object1[key] !== 'object') {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
    return true;
  } else if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
};


module.exports = eqObjects;

