const { ListNode, deleteDuplicates } = require("../src/removeDuplicates");

function arrayToList(arr) {
  let dummy = new ListNode(0);
  let curr = dummy;
  for (let val of arr) {
    curr.next = new ListNode(val);
    curr = curr.next;
  }
  return dummy.next;
}

function listToArray(head) {
  const res = [];
  while (head) {
    res.push(head.val);
    head = head.next;
  }
  return res;
}

test("Removes duplicates from sorted list", () => {
  const head = arrayToList([1, 1, 2, 3, 3]);
  const result = deleteDuplicates(head);
  expect(listToArray(result)).toEqual([1, 2, 3]);
});
