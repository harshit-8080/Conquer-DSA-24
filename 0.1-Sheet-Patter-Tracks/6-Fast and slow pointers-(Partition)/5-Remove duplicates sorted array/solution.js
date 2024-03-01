/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 0,
    j = 1;

  while (i < nums.length && j < nums.length) {
    if (nums[i] != nums[j]) {
      i++;
      nums[i] = nums[j];
      j++;
    } else {
      j++;
    }
  }

  return ++i;
};
