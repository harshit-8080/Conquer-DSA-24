function findTriplets(arr, n) {
  let ans = false;

  for (let i = 0; i < n; i++) {
    let hashSet = new Set();
    for (let j = i + 1; j < n; j++) {
      let found = -(arr[i] + arr[j]);
      if (hashSet.has(found)) {
        ans = true;
        break;
      } else hashSet.add(arr[j]);
    }
    if (ans) break;
  }
  return ans;
}
