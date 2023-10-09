import myFunctions from "./sample-functions";

test("Testing mySum -- success", () => {
  const expected = 30;
  const result = myFunctions.mySum(12, 18);
  expect(expected).toBe(result);
});
