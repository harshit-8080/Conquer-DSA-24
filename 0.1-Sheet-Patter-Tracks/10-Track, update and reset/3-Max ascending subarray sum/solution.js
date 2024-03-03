/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
  let maxSum = 0,
    sum = 0,
    i = 1;

  sum = nums[0];

  while (i < nums.length) {
    if (nums[i] > nums[i - 1]) {
      sum += nums[i];
    } else {
      maxSum = Math.max(sum, maxSum);
      sum = nums[i];
    }

    i++;
  }

  return Math.max(sum, maxSum);
};
