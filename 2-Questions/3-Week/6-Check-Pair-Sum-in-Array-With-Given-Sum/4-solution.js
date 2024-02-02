/*

Given an array of integers nums and an integer target.
Return indices of the two numbers such that they add up to target.

------------------------------------------------------------------------------------------------

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

------------------------------------------------------------------------------------------------

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

------------------------------------------------------------------------------------------------
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

*/

// * https://leetcode.com/problems/two-sum/description/

var twoSum = function (arr, target) {
  let map = {};
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let diff = target - arr[i];
    if (map[diff] != undefined) {
      return [i, map[diff]];
    } else {
      map[arr[i]] = i;
    }
  }

  return false;
};
