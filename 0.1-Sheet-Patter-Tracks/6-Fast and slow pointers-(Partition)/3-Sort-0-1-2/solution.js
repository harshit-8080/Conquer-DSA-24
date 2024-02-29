/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let nextZero = 0,
    nextTwo = nums.length - 1;

  i = 0;
  while (i <= nextTwo) {
    if (nums[i] == 0) {
      [nums[i], nums[nextZero]] = [nums[nextZero], nums[i]];
      i++;
      nextZero++;
    } else if (nums[i] == 2) {
      [nums[i], nums[nextTwo]] = [nums[nextTwo], nums[i]];
      nextTwo--;
    } else if (nums[i] == 1) {
      i++;
    }
  }
};
