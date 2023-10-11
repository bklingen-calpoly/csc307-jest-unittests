const myFunctions = require("./sample-functions");

test("Testing mySum -- success", () => {
  const expected = 3;
  const result = myFunctions.mySum(1, 2);
  expect(result).toBe(expected);
});

test("Testing mySum -- fail", () => {
  const expected = 31;
  const result = myFunctions.mySum(12, 18);
  expect(result).not.toBe(expected);
});

test("all letters", () => {
  const result = myFunctions.containsNumbers("as;ldk");
  expect(result).toBeFalsy();
});

test("letters and one number in the middle", () => {
  const result = myFunctions.containsNumbers("as;l8dk");
  expect(result).toBeTruthy();
});

test("letters and at least one whitespace", () => {
  const result = myFunctions.containsNumbers("as; dk");
  expect(result).toBeFalsy();
});

// test("myDiv by zero with infinity", () => {
//   expect(myFunctions.myDiv(23, 0)).toBe(Infinity);
// });

// "You must wrap the code in a function, otherwise the error will not be caught and the assertion will fail";
// not: expect(myFunctions.myDiv(23, 0)).toThrowError(/myDiv by zero/);
// expect(() => myFunctions.myDiv(23, 0)).toThrowError(/myDiv by zero/);

// test("myDiv by zero with Error thrown", () => {
//   expect(() => {
//     myFunctions.myDiv(23, 0);
//   }).toThrowError(/myDiv by zero/);
// });

test("Testing successful myDiv", () => {
  const expected = 4;
  const result = myFunctions.myDiv(24, 6);
  expect(result).toBe(expected);
});

test("Testing myDiv with float myDivisor/myDivided -- success", () => {
  const expected = 2.64;
  const result = myFunctions.myDiv(6.6, 2.5);
  const epsilon = Math.abs(result / result - 1);
  const x = epsilon <= 0.00001;
  expect(x).toBeTruthy();
});
// "You must wrap the code in a function, otherwise the error will not be caught and the assertion will fail"
// not: expect(myFunctions.div(23, 0)).toThrowError(/Div by zero/);
// expect(() => myFunctions.div(23, 0)).toThrowError(/Div by zero/);
// test("Testing div by zero with Error thrown", () => {

//   expect(() => {
//     myFunctions.myDiv(23, 0);
//   }).toThrowError(/Div by zero/);
// });

// test('Testing myDiv by zero', () => {
//     expect(() => myFunctions.myDiv(10,0)).toThrow(/myDiv by zero not supported/);
// });

//https://jestjs.io/docs/setup-teardown

//Runs before each test case
beforeEach(() => {});

//Runs after each case
afterEach(() => {});

//Runs once before all test cases start
beforeAll(() => {});

//Runs once after all test cases end
afterAll(() => {});
