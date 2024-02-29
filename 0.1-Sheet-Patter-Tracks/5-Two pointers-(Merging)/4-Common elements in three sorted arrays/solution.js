function commonElements(a1, a2, a3, n1, n2, n3) {
  let count = [];
  let i = 0,
    j = 0,
    k = 0;

  while (i < a1.length && j < a2.length && k < a3.length) {
    if (a1[i] == a2[j] && a2[j] == a3[k]) {
      if (count[count.length - 1] != a1[i]) {
        count.push(a1[i]);
      }
      i++;
      j++;
      k++;
    } else if (a1[i] < a2[j]) {
      i++;
    } else if (a2[j] < a3[k]) {
      j++;
    } else {
      k++;
    }
  }
  return count;
}
