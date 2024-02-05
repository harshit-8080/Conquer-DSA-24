//* https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

// * BF Idea --> using unique array

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let unique = [];
  index = -1;
  for (let i = 0; i < nums.length; i++) {
    if (unique.length == 0) {
      unique.push(nums[i]);
      index = index + 1;
    } else if (unique[index] != nums[i]) {
      unique.push(nums[i]);
      index = index + 1;
    }
  }

  for (let i = 0; i < unique.length; i++) {
    nums[i] = unique[i];
  }
  return unique.length;
};
