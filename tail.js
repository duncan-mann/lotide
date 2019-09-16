const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed : ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed : ${actual} !== ${expected}`);
  }

};

function tail(array) {
  if (array.length === 0) {
    return [];
  } else if (array.length === 1) {
    return [];
  } else {
    let tailArray = array.slice(1);
    return tailArray;
  }

}

let hello = ["Hi", "I'm", "Duncan"];
let result = tail(hello);

assertEqual(result.length, 2);
assertEqual(result[0], "I'm");
assertEqual(result[1], "Duncan");

let empty = tail([]);
console.log(empty);

let one = tail(["only element"]);
console.log(one);

