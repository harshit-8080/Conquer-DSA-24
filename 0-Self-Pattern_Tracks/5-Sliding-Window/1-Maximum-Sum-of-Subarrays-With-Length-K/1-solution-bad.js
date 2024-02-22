/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
  let arr = [];

  let n = nums.length;
  let maxSum = 0;
  for (let i = 0; i <= n - k; i++) {
    let sum = 0;
    let map = {};

    for (let j = i; j < i + k; j++) {
      if (map[nums[j]] != undefined) {
        sum = 0;
        map = {};
        break;
      } else {
        map[nums[j]] = 1;
        sum = sum + nums[j];
      }
    }

    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
};
