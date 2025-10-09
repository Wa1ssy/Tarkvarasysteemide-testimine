const {
  longestCommonPrefix,
  lengthOfLastWord,
  climbStairs,
  removeDuplicates,
  minDepth
} = require("../src/algorithms");

// Väike abifunktsioon ListNode jaoks
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

describe("LeetCode algorithms", () => {

  test("14. Longest Common Prefix", () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
  });

  test("58. Length of Last Word", () => {
    expect(lengthOfLastWord("Hello World")).toBe(5);
    expect(lengthOfLastWord("fly me to the moon")).toBe(4);
  });

  test("70. Climbing Stairs", () => {
    expect(climbStairs(2)).toBe(2);
    expect(climbStairs(3)).toBe(3);
    expect(climbStairs(5)).toBe(8);
  });

  test("83. Remove Duplicates from Sorted List", () => {
    const head = new ListNode(1, new ListNode(1, new ListNode(2)));
    const result = removeDuplicates(head);
    expect(result.val).toBe(1);
    expect(result.next.val).toBe(2);
    expect(result.next.next).toBe(null);
  });

  test("111. Minimum Depth of Binary Tree", () => {
    const tree = { val: 1, left: { val: 2, left: null, right: null }, right: null };
    expect(minDepth(tree)).toBe(2);
    expect(minDepth(null)).toBe(0);
  });
});
