function check(arr, N) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] != undefined) {
      return false;
    } else {
      map[arr[i]] = 1;
    }
  }

  return true;
}
