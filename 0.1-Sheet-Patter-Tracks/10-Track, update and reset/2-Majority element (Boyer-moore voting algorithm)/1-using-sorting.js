/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  if (nums.length == 1) {
    return nums[0];
  }
  nums.sort((a, b) => a - b);

  let result = -1;
  (count = 1), (maxCount = 1);
  i = 1;

  while (i < nums.length) {
    if (nums[i] == nums[i - 1]) {
      count++;
    } else {
      if (count > maxCount) {
        maxCount = count;
        result = nums[i - 1];
      }
      count = 1;
    }
    i++;
  }

  if (count > maxCount) {
    maxCount = count;
    result = nums[i - 1];
  }

  return result;
};
