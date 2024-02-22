//* https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

var searchRange = function (arr, x) {
  let n = arr.length;
  let result = new Array(2).fill(-1);

  let left = 0,
    right = n - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] == x) {
      if (mid == n - 1) {
        result[1] = mid;
        break;
      } else if (mid <= n - 2 && arr[mid] != arr[mid + 1]) {
        result[1] = mid;
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

  return result[0];
};
