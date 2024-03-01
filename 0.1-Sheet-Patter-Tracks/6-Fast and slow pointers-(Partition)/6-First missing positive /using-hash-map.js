/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  const map = {};
  nums.forEach((item) => {
    map[item] = map[item] || 1;
  });

  let i;
  for (i = 1; i <= nums.length; i++) {
    if (map[i] == undefined) {
      console.log(map[i]);
      return i;
    }
  }

  return i;
};
