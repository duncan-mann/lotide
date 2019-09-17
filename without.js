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

const without = function(array, toDelete) {
  let answer = array;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < toDelete.length; j++) {
      if (array[i] === toDelete[j]) {
        answer.splice(i,1);
      }
    }
  }
  return answer;
};

assertEqualArrays(without([1, 2, 3], [1]), [2,3]);
assertEqualArrays(without(["1", "2", "3"], [1, 2, "3"]), ["1","2"]);

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]);
assertEqualArrays(words, ["hello", "world", "lighthouse"]);
