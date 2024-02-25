// * https://leetcode.com/problems/left-and-right-sum-differences/

var leftRightDifference = function (nums) {
  let n = nums.length;
  let prefixProduct = new Array(nums.length).fill(0);
  let suffixProduct = new Array(nums.length).fill(0);

  for (let i = 1; i < n; i++) {
    prefixProduct[i] = prefixProduct[i - 1] + nums[i - 1];
  }

  for (let i = n - 2; i >= 0; i--) {
    suffixProduct[i] = suffixProduct[i + 1] + nums[i + 1];
  }

  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(Math.abs(prefixProduct[i] - suffixProduct[i]));
  }

  return result;
};
