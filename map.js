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

const assertEqualArrays = function(array1, array2) {

  if (eqArrays(array1,array2)) {
    console.log('✅ Assertion Passed : First Array === Second Array');
  } else {
    console.log('🛑 Assertion Failed : First Array !== Second Array');
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const result = [];

  for (let each of array) {
    result.push(callback(each));
  }
  return result;
}

const results1 = map(words, word => word[0]);
assertEqualArrays(results1, ['g', 'c', 't', 'm', 't']);
