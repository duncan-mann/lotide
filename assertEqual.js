const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log("✅ Assertion Passed : " + actual + " === " + expected);
  } else {
    console.log("🛑 Assertion Failed: " + actual + " !== " + expected);
  }

};

assertEqual(10, 10);
assertEqual(100,200);
assertEqual("Hi", "Hi");
assertEqual("Yes", "No");