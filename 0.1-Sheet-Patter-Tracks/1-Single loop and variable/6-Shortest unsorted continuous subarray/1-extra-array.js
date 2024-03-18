/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  let tempArr = nums.slice();
  tempArr.sort((a, b) => a - b);

  let left = -1,
    right = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != tempArr[i]) {
      if (left == -1 && right == -1) {
        left = i;
        right = i;
      } else {
        if (right != -1) {
          right = i;
        }
      }
    }
  }

  if (left == -1 && right == -1) {
    return 0;
  }

  return right - left + 1;
};
