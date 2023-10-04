function mySum(a, b) {
  return a + b;
}

exports.myDiv = function myDiv(a, b) {
  if (b === 0) {
    throw new Error("myDiv by zero.");
  }
  return a / b; //or just return this line and expect .toBe(Infinity)
};

exports.containsNumbers = function containsNumbers(text) {
  for (let i = 0; i < text.length; i++) {
    // isNan treats a string with " " as a number (0)
    // if (!isNaN(text.charAt(i))) return true;
    // use parseInt so that it doesn't get converts to 0
    if (!isNaN(parseInt(text.charAt(i)))) return true;
  }
  return false;
};

//Also, note different ways to export functions.
exports.mySum = mySum;
// exports.myDiv = myDiv;
// exports.containsNumbers = containsNumbers;
