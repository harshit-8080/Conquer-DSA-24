/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (arr) {
  let n = arr.length;
  let left = 0,
    right = n - 1;

  if (arr.length == 1) {
    return 0;
  }

  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (mid > 0 && mid < n - 1) {
      if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
        return mid;
      } else if (arr[mid - 1] > arr[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      break;
    }
  }

  if (arr[0] > arr[1]) {
    return 0;
  } else if (arr[0] < arr[1] && arr[1] > arr[2]) {
    return 1;
  }

  if (arr[n - 1] > arr[n - 2]) {
    return n - 1;
  } else if (arr[n - 1] < arr[n - 2]) {
    return n - 2;
  }

  return 0;
};
