//* https://www.geeksforgeeks.org/problems/floor-in-a-sorted-array-1587115620/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=bottom_sticky_on_article

//*  Largest Element which is smaller than X

function findFloor(arr, n, x) {
  let left = 0,
    right = n - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (arr[mid] <= x) {
      if (mid == n - 1) {
        return mid;
      } else if (x < arr[mid + 1]) {
        return mid;
      } else {
        left = mid + 1;
      }
    } else if (arr[mid] < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
