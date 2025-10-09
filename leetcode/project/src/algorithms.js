// 14. Longest Common Prefix
function longestCommonPrefix(strs) {
  if (!strs.length) return "";
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);
      if (!prefix) return "";
    }
  }
  return prefix;
}

// 58. Length of Last Word
function lengthOfLastWord(s) {
  return s.trim().split(" ").pop().length;
}

// 70. Climbing Stairs
function climbStairs(n) {
  if (n <= 2) return n;
  let a = 1, b = 2;
  for (let i = 3; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}

// 83. Remove Duplicates from Sorted List
function removeDuplicates(head) {
  let current = head;
  while (current && current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
}

// 111. Minimum Depth of Binary Tree
function minDepth(root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;
  if (!root.left) return 1 + minDepth(root.right);
  if (!root.right) return 1 + minDepth(root.left);
  return 1 + Math.min(minDepth(root.left), minDepth(root.right));
}

module.exports = {
  longestCommonPrefix,
  lengthOfLastWord,
  climbStairs,
  removeDuplicates,
  minDepth
};
