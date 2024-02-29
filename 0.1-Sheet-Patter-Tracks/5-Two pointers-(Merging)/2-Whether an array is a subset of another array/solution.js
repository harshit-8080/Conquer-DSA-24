function isSubset(a1, a2, n, m) {
  a1.sort((a, b) => a - b);
  a2.sort((a, b) => a - b);

  let i = 0,
    j = 0;

  while (i < a1.length && j < a2.length) {
    if (a1[i] == a2[j]) {
      j++;
    }
    i++;
  }

  if (j == a2.length) {
    return "Yes";
  } else {
    return "No";
  }
}
