//* https://www.geeksforgeeks.org/problems/binary-search-1587115620/1

function binarysearch(arr, n, target) {
  let left = 0,
    right = n - 1;

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

