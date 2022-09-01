const { add, calculateHyp } = require("./code");

test("add should return sum of a + b", () => {
  let sum = add(1, 2);
  expect(sum).toBe(3);
});

test("calculateHyp should return root of sum of 2 squered numbers", () => {
  let res = calculateHyp(3, 4);
  expect(res).toBe(5);
});
