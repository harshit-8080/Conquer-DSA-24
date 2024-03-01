/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
  let newArr = new Array(nums.length).fill(0);

  let nextPositive = 0,
    nextNegative = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      newArr[nextPositive] = nums[i];
      nextPositive = nextPositive + 2;
    } else {
      newArr[nextNegative] = nums[i];
      nextNegative = nextNegative + 2;
    }
  }

  return newArr;
};
