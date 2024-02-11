function isSubset(a1, a2, n, m) {
  let map = {};

  for (let i = 0; i < n; i++) {
    if (map[a1[i]] != undefined) {
      map[a1[i]] = map[a1[i]] + 1;
    } else {
      map[a1[i]] = 1;
    }
  }

  for (let i = 0; i < m; i++) {
    if (map[a2[i]] != undefined && map[a2[i]] != 0) {
      map[a2[i]] = map[a2[i]] - 1;
    } else {
      return "No";
    }
  }

  return "Yes";
}
