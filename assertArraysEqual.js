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
};

const assertEqualArrays = function(eqArraysResult) {

  if (eqArraysResult) {
    console.log('✅ Assertion Passed : First Array === Second Array');
  } else {
    console.log('🛑 Assertion Failed : First Array !== Second Array');
  }
};

let first = [1,2,3];
let second = [1,2,3];
let third = [1,2,'3'];

assertEqualArrays(eqArrays(first, second));
assertEqualArrays(eqArrays(second, third));