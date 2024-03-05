function check(arr, brr, N) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] != undefined) {
      map[arr[i]] = map[arr[i]] + 1;
    } else {
      map[arr[i]] = 1;
    }
  }

  for (let i = 0; i < brr.length; i++) {
    if (map[brr[i]] != undefined) {
      map[brr[i]] = map[brr[i]] - 1;
      if (map[brr[i]] == 0) {
        delete map[brr[i]];
      }
    } else {
      return false;
    }
  }

  return Object.keys(map) == 0 ? true : false;
}
