function findKRotation(arr, n) {
  let left = 0,
    right = n - 1;
  while (left <= right) {
    if (arr[left] <= arr[right]) {
      return left;
    }
    let mid = Math.floor((left + right) / 2);
    let next = (mid + 1) % n;
    let prev = (mid + n - 1) % n;

    if (arr[mid] <= arr[next] && arr[mid] <= arr[prev]) {
      return mid;
    } else if (arr[left] <= arr[mid]) {
      left = mid + 1;
    } else if (arr[mid] <= arr[right]) {
      right = mid - 1;
    }
  }
  return 0;
}
