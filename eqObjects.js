const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed : ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed : ${actual} !== ${expected}`);
  }

};

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


const ab = { a: "1", b: "2", d: "42" };
const ba = { b: "2", d:"42", a: "1" };
let answer = eqObjects(ab,ba);
console.log('test ab,ba-->', answer);
console.log('ab,ba', eqObjects(ab, ba)); // => true

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log('cd,dc', eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log('cd,cd2', eqObjects(cd, cd2)); // => false
