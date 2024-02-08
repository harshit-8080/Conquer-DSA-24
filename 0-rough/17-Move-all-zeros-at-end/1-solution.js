function pushZerosToEnd(arr, n) {
  let slow = 0,
    fast = 0;

  while (slow < arr.length && fast < arr.length) {
    if (arr[slow] == 0) {
      if (arr[fast] != 0) {
        let temp = arr[slow];
        arr[slow] = arr[fast];
        arr[fast] = temp;

        slow++;
        fast++;
      } else {
        fast++;
      }
    } else {
      slow++;
      fast++;
    }
  }
}
