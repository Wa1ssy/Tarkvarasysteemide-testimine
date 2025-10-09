const climbStairs = require("../src/climbingStairs");

test("n=2 returns 2", () => {
  expect(climbStairs(2)).toBe(2);
});

test("n=5 returns 8", () => {
  expect(climbStairs(5)).toBe(8);
});
