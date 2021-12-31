const myFunctions = require("./sample-functions.js");

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
  const target = 30;
  const result = myFunctions.sum(12, 18);
  expect(result).toBe(target);
});

test("all letters", () => {
  const result = myFunctions.containsNumbers("as;ldk");
  expect(result).toBeFalsy();
});

test("lettters and one number in the middle", () => {
  const result = myFunctions.containsNumbers("as;l8dk");
  expect(result).toBeTruthy();
});

test("lettters and at least one whitespace", () => {
  const result = myFunctions.containsNumbers("as; dk");
  expect(result).toBeFalsy();
});

test("last number", () => {
  const result = myFunctions.containsNumbers("as;ldk8");
  expect(result).toBeTruthy();
});
// test.only('div by zero with infinity', ()=>{
//     expect(myFunctions.div(23, 0)).toBe(Infinity);
// });

test("div by zero with Error thrown", () => {
  expect(() => myFunctions.div(23, 0)).toThrowError(/Div by zero/);
});

// test('Testing div by zero', () => {
//     expect(myFunctions.div(10,0)).toBe(Infinity);
// });

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
