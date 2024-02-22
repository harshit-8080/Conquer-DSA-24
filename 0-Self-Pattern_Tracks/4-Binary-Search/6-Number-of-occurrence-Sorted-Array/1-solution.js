function noOfOccureenceInSortedArray(arr, n, x) {
  let first = -1,
    last = -1;

  let left = 0,
    right = n - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] == x) {
      if (mid == 0 || arr[mid] != arr[mid - 1]) {
        first = mid;
        break;
      } else {
        right = mid - 1;
      }
    } else if (x > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  left = 0;
  right = n - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] == x) {
      if (mid == n - 1 || arr[mid] != arr[mid + 1]) {
        last = mid;
        break;
      } else {
        left = mid + 1;
      }
    } else if (x > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  if (last == -1 && first == -1) {
    return 0;
  }
  return 1 + (last - first);
}
