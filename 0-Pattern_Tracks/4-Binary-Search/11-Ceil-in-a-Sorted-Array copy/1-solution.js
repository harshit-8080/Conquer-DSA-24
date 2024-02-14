//*  Smallest element which is greater than X

function findCeil(arr, n, x) {
  let left = 0,
    right = n - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (arr[mid] >= x) {
      if (mid == 0) {
        return mid;
      } else if (x > arr[mid - 1]) {
        return mid;
      } else {
        right = mid - 1;
      }
    } else if (arr[mid] <= x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
