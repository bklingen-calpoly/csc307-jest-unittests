function mySum(a, b) {
  return a + b;
}

function myDiv(a, b) {
  if (b === 0) {
    throw new Error("myDiv by zero.");
  }
  return a / b; //or just return this line and expect .toBe(Infinity)
}

function containsNumbers(text) {
  for (let i = 0; i < text.length; i++) {
    // if (!isNaN(text.charAt(i))) return true;
    // use parseInt so that it doesn't get converts to 0
    if (!isNaN(parseInt(text.charAt(i)))) return true;
  }
  return false;
}

export default { mySum, myDiv, containsNumbers };
