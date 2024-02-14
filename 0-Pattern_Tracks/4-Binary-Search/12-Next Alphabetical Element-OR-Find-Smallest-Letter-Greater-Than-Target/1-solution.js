// * https://leetcode.com/problems/find-smallest-letter-greater-than-target/
var nextGreatestLetter = function (arr, target) {
  console.log(arr);
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] > target) {
      if (mid == 0) {
        return arr[mid];
      } else if (target >= arr[mid - 1]) {
        return arr[mid];
      } else {
        right = mid - 1;
      }
    } else if (arr[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return arr[0];
};
