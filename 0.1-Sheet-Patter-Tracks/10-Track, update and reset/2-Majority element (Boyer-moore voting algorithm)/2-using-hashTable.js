/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]] = map[nums[i]] + 1;
    } else {
      map[nums[i]] = 1;
    }
  }

  let me = Math.floor(nums.length / 2);

  for (key in map) {
    if (map[key] > me) {
      return key;
    }
  }

  return -1;
};
