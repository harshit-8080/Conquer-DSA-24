/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  let map = {};
  for (let i = 0; i < nums1.length; i++) {
    if (map[nums1[i]] != undefined) {
      map[nums1[i]] = map[nums1[i]] + 1;
    } else {
      map[nums1[i]] = 1;
    }
  }

  console.log(map);
  let result1 = [];
  let map1 = {};
  for (let i = 0; i < nums2.length; i++) {
    if (map1[nums2[i]] != undefined) {
      map1[nums2[i]] = map1[nums2[i]] + 1;
    } else {
      map1[nums2[i]] = 1;
    }

    if (map[nums2[i]] == undefined && map1[nums2[i]] == 1) {
      result1.push(nums2[i]);
    }
  }

  console.log(map1);
  let result2 = [];
  for (let i = 0; i < nums1.length; i++) {
    if (map1[nums1[i]] == undefined && map[nums1[i]] != undefined) {
      result2.push(nums1[i]);
      map[nums1[i]] = undefined;
    }
  }

  return [result2, result1];
};
