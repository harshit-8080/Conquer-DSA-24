// * https://leetcode.com/problems/search-in-rotated-sorted-array/description/

function miniElementIndex(arr, n) {
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
function binarysearch(arr, left, right, target) {
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

var search = function (arr, target) {
  let miniIndex = miniElementIndex(arr, arr.length);

  let i = binarysearch(arr, miniIndex, arr.length, target);
  if (i != -1) {
    return i;
  }
  let j = binarysearch(arr, 0, miniIndex - 1, target);

  return j;
};
