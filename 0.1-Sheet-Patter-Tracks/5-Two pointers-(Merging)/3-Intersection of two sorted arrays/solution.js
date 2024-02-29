//* https://leetcode.com/problems/intersection-of-two-arrays/

var intersection = function (a1, a2) {
  a1.sort((a, b) => a - b);
  a2.sort((a, b) => a - b);

  let count = [];
  let i = 0,
    j = 0;

  while (i < a1.length && j < a2.length) {
    if (a1[i] == a2[j]) {
      if (count[count.length - 1] != a1[i]) {
        count.push(a1[i]);
      }
      i++;
      j++;
    } else if (a1[i] > a2[j]) {
      j++;
    } else {
      i++;
    }
  }

  return count;
};
