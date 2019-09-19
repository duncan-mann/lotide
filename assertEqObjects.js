const eqArrays = function(arr1, arr2) {

  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

const eqObjects = function(obj1, obj2) {
let result
let keys1 = Object.keys(obj1);
let keys2 = Object.keys(obj2);

if (keys1.length === keys2.length) {

  for (key in obj1) {
    if (obj2[key] === undefined) {
      return false;
    }

    if (!Array.isArray(obj1[key])) {
      
      if (obj2[key] !== obj1[key]) {
        return false;
      }
      return true;
    }
    if (Array.isArray(obj1[key])) {
      result = eqArrays(obj1[key], obj2[key]);
    }
  }
    return result;
  }
}

const assertObjectsEqual = function (actual, expected) {

if (eqObjects(actual, expected)) {
  console.log('✅ Assertion Passed : First Object === Second Object');
} else {
  console.log('🛑 Assertion Failed : First Object !== Second Object');
}
};

assertObjectsEqual({a:2,b:2,c:[1,2]},{a:2,c:[1,2],b:2});