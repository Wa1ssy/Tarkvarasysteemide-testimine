const { TreeNode, minDepth } = require("../src/minDepth");

test("Single node tree has depth 1", () => {
  expect(minDepth(new TreeNode(1))).toBe(1);
});

test("Balanced tree", () => {
  const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
  expect(minDepth(root)).toBe(2);
});
