const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed : ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed : ${actual} !== ${expected}`);
  }

};

const countLetters = function(string) {

  let results = {};
  
  const letters = string.split(' ').join('');

  for (const letter of letters) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }

  }
  return results;
  
};

const school = "lighthouse in the house";

countLetters(school);


