/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let maxCount = 0,
    count = 0,
    i = 0;

  while (i < nums.length) {
    if (nums[i] == 1) {
      count++;
    } else {
      maxCount = Math.max(count, maxCount);
      count = 0;
    }

    i++;
  }

  return Math.max(count, maxCount);
};
