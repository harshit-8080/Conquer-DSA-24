/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (arr, k) {
  let left = 0,
    right = arr.length - 1;

  let first = -1,
    last = -1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] == k) {
      first = mid;
      right = mid - 1;
    } else if (arr[mid] < k) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  (left = 0), (right = arr.length - 1);
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] == k) {
      last = mid;
      left = mid + 1;
    } else if (arr[mid] < k) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return [first, last];
};
