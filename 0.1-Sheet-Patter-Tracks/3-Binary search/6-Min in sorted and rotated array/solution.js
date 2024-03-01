/**
 * @param {number[]} nums
 * @return {number}
 */
function getSmallerElementIndex(arr) {
  let n = arr.length;
  let left = 0,
    right = n - 1;

  while (left <= right) {
    if (arr[left] <= arr[right]) {
      return left;
    }
    let mid = Math.floor((left + right) / 2);

    let next = (mid + 1) % n;
    let prev = (mid + n - 1) % n;

    if (arr[mid] < arr[prev] && arr[mid] < arr[next]) {
      return mid;
    } else if (arr[left] > arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}
var findMin = function (nums) {
  return nums[getSmallerElementIndex(nums)];
};
