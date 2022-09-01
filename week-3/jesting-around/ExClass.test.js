const Mymodul = require("./ExClass");
const eClass = new Mymodul.Exercises();

test("should return true (n is even)", () => {
  let res = eClass.isEven(6);
  expect(res).toBeTruthy();
});

test("should return false (n is odd)", () => {
  let res = eClass.isEven(5);
  expect(res).toBeFalsy();
});

test("Should remove at least one element from the array `arr`", () => {
  let res = eClass.removeAtLeastOne(["1", "2", "3", "4"]);
  expect(res.length).toBeLessThan(4);
});

test(`should return a clean string without these symbols: "!", "#", ".", ",", "'"`, () => {
  let res = eClass.simplify("hello!World");
  expect(res).toBe("helloWorld");
});

test(`should verify that there is at least one boolean in the array`, () => {
  let res = eClass.validate([1, 2]);
  expect(res).toEqual({
    error: "Need at least one boolean",
  });
});

test(`should verify that there is at least one boolean in the array`, () => {
  let res = eClass.validate([1, 2, true]);
  expect(res).toBeTruthy();
});

test(`should verify that there is at least one boolean in the array`, () => {
  let res = eClass.validate([1, 2, false]);
  expect(res).toBeFalsy();
});
