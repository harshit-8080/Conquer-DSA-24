function findSum(arr, N) {
  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      if (arr[i + 1] > max) {
        max = arr[i + 1];
      }
      if (arr[i] < min) {
        min = arr[i];
      }
    } else {
      if (arr[i] > max) {
        max = arr[i];
      }
      if (arr[i + 1] < min) {
        min = arr[i + 1];
      }
    }
  }

  return [max, min];
}
