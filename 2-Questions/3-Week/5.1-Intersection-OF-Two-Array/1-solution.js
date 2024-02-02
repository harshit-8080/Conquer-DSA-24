/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let map = {};
  for (let i = 0; i < nums1.length; i++) {
    if (map[nums1[i]]) {
      continue;
    } else {
      map[nums1[i]] = nums1[i];
    }
  }

  let output = [];
  for (let i = 0; i < nums2.length; i++) {
    if (map[nums2[i]] != undefined) {
      output.push(nums2[i]);
      delete map[nums2[i]];
    }
  }

  return output;
};
