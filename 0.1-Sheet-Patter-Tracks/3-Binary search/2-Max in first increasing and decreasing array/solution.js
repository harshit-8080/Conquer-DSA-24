function findMaximum(arr, n) {
  let left = 0,
    right = n - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (
      mid > 0 &&
      mid < n - 1 &&
      arr[mid] > arr[mid - 1] &&
      arr[mid] > arr[mid + 1]
    ) {
      return arr[mid];
    } else if (mid > 0 && arr[mid] > arr[mid - 1]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  if (arr[0] > arr[1]) {
    return arr[0];
  } else if (arr[1] > arr[0] && arr[1] > arr[2]) {
    return arr[1];
  }

  if (arr[n - 1] > arr[n - 2]) {
    return arr[n - 1];
  } else if (arr[n - 2] > arr[n - 1] && arr[n - 2] > arr[n - 3]) {
    return arr[n - 2];
  }

  return -1;
}
