//* https://leetcode.com/problems/linked-list-cycle-ii/

function hasLoop(head) {
  let slow = head,
    fast = head;

  while (
    slow != null &&
    slow.next != null &&
    fast != null &&
    fast.next != null
  ) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) {
      return slow;
    }
  }

  return null;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  const meetingPoint = hasLoop(head);
  console.log(meetingPoint);

  if (meetingPoint != null) {
    let slow = head,
      fast = meetingPoint;

    if (slow != fast) {
      while (slow != fast) {
        slow = slow.next;
        fast = fast.next;
      }

      // fast = null;
      return fast;
    } else {
      let temp = slow;
      while (temp != slow) {
        temp = temp.next;
      }

      // temp.next = null;
      return temp;
    }
  }

  return null;
};
