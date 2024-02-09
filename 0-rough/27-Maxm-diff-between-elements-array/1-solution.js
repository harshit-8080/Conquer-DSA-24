/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (arr) {
  let min = arr[0];
  let maxDiff = 0;

  let i = 1;
  let diff;
  while (i < arr.length) {
    if (arr[i] > min) {
      diff = arr[i] - min;
      maxDiff = Math.max(maxDiff, diff);
    } else {
      min = Math.min(arr[i], min);
    }
    i++;
  }

  return maxDiff == 0 ? -1 : maxDiff;
};
