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

const letterPositions = function(string) {
  console.log('first index ->', string[0]);
  let results = {};

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
        if (!results[string[i]]) {
      results[string[i]] = [i];
    }   else {
      results[string[i]].push(i);
    }
  }
}

console.log(results);
return results;

}

let greeting = "hello";
letterPositions(greeting);

assertEqualArrays(letterPositions(greeting).h, [0]);
assertEqualArrays(letterPositions(greeting).e, [1]);
assertEqualArrays(letterPositions(greeting).l, [2,3]);
assertEqualArrays(letterPositions(greeting).o, [4]);

let lighthouse = "lighthouse in the house";
letterPositions(lighthouse);