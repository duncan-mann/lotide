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


const flatten = function(array) {
  let answer = array;

  for (let i = 0; i < answer.length; i++) {

    if (Array.isArray(answer[i])) {
      let transfer = answer[i];
      answer.splice(i,1);

      for (let j = (transfer.length - 1); j >= 0; j--) {
        answer.splice(i,0,transfer[j]);
      }
    }
  }
  return answer;
};


assertEqualArrays(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);



