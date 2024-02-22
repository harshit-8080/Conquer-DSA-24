function binarySearch(arr, l, r, x) {
  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);

    if (arr[mid] == x) return mid;
    if (mid > l && arr[mid - 1] == x) return mid - 1;
    if (mid < r && arr[mid + 1] == x) return mid + 1;

    if (arr[mid] > x) {
      r = mid - 2;
    } else {
      l = mid + 2;
    }
  }

  return -1;
}
