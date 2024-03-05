function check(arr, brr, N) {
  let map = {};
  let maxFreq = 0;
  let mostFreqElement = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] != undefined) {
      map[arr[i]] = map[arr[i]] + 1;
      if (maxFreq < map[arr[i]]) {
        maxFreq = map[arr[i]];
        mostFreqElement = arr[i];
      } else if (maxFreq == map[arr[i]]) {
        mostFreqElement = Math.min(arr[i], mostFreqElement);
      }
    } else {
      map[arr[i]] = 1;
    }
  }

  return element;
}
