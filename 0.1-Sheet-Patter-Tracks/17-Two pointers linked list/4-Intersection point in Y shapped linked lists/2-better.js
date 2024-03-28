var getIntersectionNode = function (headA, headB) {
  let h1 = headA;
  let h2 = headB;

  let countH1 = 0,
    countH2 = 0;
  while (h1 || h2) {
    if (h1) {
      countH1++;
      h1 = h1.next;
    }

    if (h2) {
      countH2++;
      h2 = h2.next;
    }
  }

  let distance = Math.abs(countH1 - countH2);

  console.log(distance);

  if (countH1 > countH2) {
    let temp = headA;
    while (distance != 0) {
      temp = temp.next;
      distance--;
    }

    while (temp != headB) {
      temp = temp.next;
      headB = headB.next;
    }

    return temp;
  } else {
    let temp = headB;
    while (distance != 0) {
      temp = temp.next;
      distance--;
    }

    while (temp != headA) {
      temp = temp.next;
      headA = headA.next;
    }

    return temp;
  }
};
