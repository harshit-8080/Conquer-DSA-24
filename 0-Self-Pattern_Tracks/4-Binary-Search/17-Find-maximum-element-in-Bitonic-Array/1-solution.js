// * https://leetcode.com/problems/find-peak-element/

// Same code as of peak element using Binary Search on Answer

var findPeakElement = function (arr) {
  let n = arr.length;
  let left = 0,
    right = n - 1;

  if (arr.length == 1) {
    return 0;
  }

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (mid > 0 && mid < n - 1) {
      if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
        return mid;
      } else if (arr[mid - 1] > arr[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (mid == 0) {
      if (arr[mid] > arr[mid + 1]) {
        return mid;
      } else {
        return mid + 1;
      }
    } else if (mid == n - 1) {
      if (arr[mid] > arr[mid - 1]) {
        return mid;
      } else {
        return mid - 1;
      }
    }
  }

  return 0;
};
