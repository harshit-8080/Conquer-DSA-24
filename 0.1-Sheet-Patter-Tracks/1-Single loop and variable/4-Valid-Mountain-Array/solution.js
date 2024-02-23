// * https://leetcode.com/problems/valid-mountain-array/
// * https://www.enjoyalgorithms.com/blog/valid-mountain-array

var validMountainArray = function (arr) {
  let peakCount = 0;
  let i = 1;
  let n = arr.length;
  while (i < n - 1) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      peakCount++;
    } else if (arr[i - 1] > arr[i] && arr[i + 1] > arr[i]) {
      return false;
    } else if (arr[i - 1] == arr[i] || arr[i] == arr[i + 1]) {
      return false;
    }

    i++;
  }

  return peakCount == 1 ? true : false;
};
