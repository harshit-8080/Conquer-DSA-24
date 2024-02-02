/*

Using HashTables 
------------------------------------------------------------------------------------------------

1. Keep all frequencies counter for every elements 

2. Return the maximum frequency element

*/

var majorityElement = function (nums) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] != undefined) {
      map[nums[i]] = map[nums[i]] + 1;
    } else {
      map[nums[i]] = 1;
    }
  }

  let maxKey = nums[0];
  let maxValue = 1;

  for (let key in map) {
    if (map[key] > maxValue) {
      maxKey = key;
      maxValue = map[key];
    }
  }
  return maxKey;
};
