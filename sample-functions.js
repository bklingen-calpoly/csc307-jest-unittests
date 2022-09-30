function sum(a, b) {
  return a + b;
}

exports.div = function div(a, b) {
  if (b === 0) {
    throw new Error("Div by zero.");
  }
  return a / b; //or just return this line and expect .toBe(Infinity)
};

exports.containsNumbers = function containsNumbers(text) {
  for (let i = 0; i < text.length; i++) {
    if (!isNaN(text.charAt(i))) return true;
    // use parseInt so that it doesn't get converts to 0
    if (!isNaN(parseInt(text.charAt(i)))) return true;
  }
  return false;
};

//Also, note different ways to export functions.
exports.sum = sum;
// exports.div = div;
// exports.containsNumbers = containsNumbers;
