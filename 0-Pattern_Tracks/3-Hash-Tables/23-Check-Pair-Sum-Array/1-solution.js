function hasArrayTwoCandidates(arr, n, target) {
  let map = {};
  for (let i = 0; i < n; i++) {
    let diff = target - arr[i];
    if (map[diff] != undefined) {
      return true;
    } else {
      map[arr[i]] = 1;
    }
  }

  return false;
}
