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

const assertEqualArrays = function(actual, expected) {

  if (eqArrays(actual, expected)) {
    console.log('✅ Assertion Passed : First Array === Second Array');
  } else {
    console.log('🛑 Assertion Failed : First Array !== Second Array');
  }
};

const middle = function(array) {
  let midIndex = Math.floor((array.length - 1) / 2);
  let answer;
  if (array.length === 1 || array.length === 0) {
    return [];
  }

  if (array.length % 2 !== 0) {
    answer = [array[midIndex]];
  } else {
    answer = [array[midIndex], array[midIndex + 1]];
  }
  return answer;
};

let example = [1,2,3,4,5,6,7];
let example2 = [1,2,3,4,5,6,7,8];

assertEqualArrays(middle(example), [4]);
assertEqualArrays(middle(example2), [4,5]);
assertEqualArrays(middle([1]), []);
assertEqualArrays(middle([]), []);

