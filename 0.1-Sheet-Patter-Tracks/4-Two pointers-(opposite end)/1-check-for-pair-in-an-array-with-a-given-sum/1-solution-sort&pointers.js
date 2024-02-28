function hasArrayTwoCandidates(arr, n, x) {
  arr.sort((a, b) => a - b);

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum == x) {
      return true;
    } else if (sum > x) {
      right = right - 1;
    } else {
      left = left + 1;
    }
  }

  return false;
}
