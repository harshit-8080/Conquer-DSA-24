function findPos(arr, target) {
  let left = 0,
    right = 1;

  while (val < key) {
    left = right;
    right = 2 * right;
  }

  // Now We have left and right ready apply BinarySearch
  return binarySearch(arr, left, right, target);
}

function binarySearch(arr, left, right, target) {
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] == target) {
      return mid;
    } else if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
