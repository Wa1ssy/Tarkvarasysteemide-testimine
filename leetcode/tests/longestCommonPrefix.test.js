const longestCommonPrefix = require("../src/longestCommonPrefix");

test("Common prefix for ['flower','flow','flight']", () => {
  expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
});

test("Empty array returns ''", () => {
  expect(longestCommonPrefix([])).toBe("");
});
