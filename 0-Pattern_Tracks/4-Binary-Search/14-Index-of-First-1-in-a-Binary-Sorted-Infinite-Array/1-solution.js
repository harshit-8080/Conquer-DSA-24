function IndexOfFirst1(arr, target) {
  let left = 0,
    right = 1;

  while (arr[right] <= 0) {
    left = right;
    right = 2 * right;
  }

  // Now We have left and right ready apply BinarySearch
  return firstOccurence(arr, left, right, target);
}

var firstOccurence = function (arr, left, right, target) {
  let n = arr.length;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] == target) {
      if (mid == 0) {
        result = mid;
        break;
      } else if (mid >= 0 && arr[mid] != arr[mid - 1]) {
        result = mid;
        break;
      } else {
        right = mid - 1;
      }
    } else if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
};
