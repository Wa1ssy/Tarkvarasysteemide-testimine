const lengthOfLastWord = require("../src/lengthOfLastWord");

test("Last word length of 'Hello World' is 5", () => {
  expect(lengthOfLastWord("Hello World")).toBe(5);
});

test("Trailing spaces handled", () => {
  expect(lengthOfLastWord("Hi there   ")).toBe(5);
});
