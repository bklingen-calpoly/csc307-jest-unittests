import myFunctions from "./sample-functions";

//Setup functions
// beforeEach( () => {

// });

// beforeAll( () => {

// });

// //Teardown functions
// afterEach( () => {

// });

// afterAll( () => {

// });

test("Testing sum -- success", () => {
  const target = 3;
  const result = myFunctions.mySum(1, 2);
  expect(result).toBe(target);
});

test("Testing sum -- fail", () => {
  const target = 31;
  const result = myFunctions.mySum(12, 18);
  expect(result).not.toBe(target);
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

// test("div by zero with infinity", () => {
//   expect(myFunctions.div(23, 0)).toBe(Infinity);
// });

test("div by zero with Error thrown", () => {
  // "You must wrap the code in a function, otherwise the error will not be caught and the assertion will fail"
  // not: expect(myFunctions.div(23, 0)).toThrowError(/Div by zero/);
  // expect(() => myFunctions.div(23, 0)).toThrowError(/Div by zero/);
  expect(() => {
    myFunctions.myDiv(23, 0);
  }).toThrowError(/Div by zero/);
});

test("test successful div", () => {
  target = 4;
  const result = myFunctions.myDiv(24, 6);
  expect(result).toBe(target);
});

// ?});

// test('Testing div by zero', () => {
//     expect(() => myFunctions.div(10,0)).toThrow(/Div by zero not supported/);
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
