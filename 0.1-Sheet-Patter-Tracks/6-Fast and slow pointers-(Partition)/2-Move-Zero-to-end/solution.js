/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let slow = 0,
    fast = 0;

  while (slow < nums.length && fast < nums.length) {
    if (nums[slow] == 0) {
      if (nums[fast] != 0) {
        [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
        slow++;
        fast++;
      } else {
        fast++;
      }
    } else {
      slow++;
      fast++;
    }
  }
};
