var mergeTwoLists = function (list1, list2) {
  let headofSortedList = null,
    temp = null;

  let ptr1 = list1,
    ptr2 = list2;

  while (ptr1 && ptr2) {
    if (ptr1.val < ptr2.val) {
      const newNode = new ListNode(ptr1.val);
      if (!headofSortedList) {
        headofSortedList = newNode;
        temp = headofSortedList;
      } else {
        temp.next = newNode;
        temp = temp.next;
      }
      ptr1 = ptr1.next;
    } else {
      const newNode = new ListNode(ptr2.val);
      if (!headofSortedList) {
        headofSortedList = newNode;
        temp = headofSortedList;
      } else {
        temp.next = newNode;
        temp = temp.next;
      }
      ptr2 = ptr2.next;
    }
  }

  while (ptr1) {
    const newNode = new ListNode(ptr1.val);
    if (!headofSortedList) {
      headofSortedList = newNode;
      temp = headofSortedList;
    } else {
      temp.next = newNode;
      temp = temp.next;
    }
    ptr1 = ptr1.next;
  }

  while (ptr2) {
    const newNode = new ListNode(ptr2.val);
    if (!headofSortedList) {
      headofSortedList = newNode;
      temp = headofSortedList;
    } else {
      temp.next = newNode;
      temp = temp.next;
    }
    ptr2 = ptr2.next;
  }

  return headofSortedList;
};
