class Solution {
  hasLoop(head) {
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
  removeLoop(head) {
    const meetingPoint = this.hasLoop(head);

    if (meetingPoint != null) {
      // console.log("____")
      let slow = head,
        fast = meetingPoint;

      if (slow != fast) {
        while (slow.next != fast.next) {
          // console.log("++")
          slow = slow.next;
          fast = fast.next;
        }

        fast.next = null;
      } else {
        let temp = slow;
        while (temp.next != slow) {
          temp = temp.next;
        }

        temp.next = null;
      }
    }
  }
}
