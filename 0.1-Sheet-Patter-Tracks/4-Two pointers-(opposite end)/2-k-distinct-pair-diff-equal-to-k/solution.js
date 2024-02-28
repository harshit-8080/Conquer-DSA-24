function countPairsWithDiffK(arr, n, k) {
  let count = 0;
  arr.sort();

  let l = 0;
  let r = 0;
  while (r < n) {
    if (Math.abs(arr[r] - arr[l]) == k && r != l) {
      count++;
      l++;
      r++;
    } else if (arr[r] - arr[l] > k) {
      l++;
    } else {
      r++;
    }
  }
  return count;
}
