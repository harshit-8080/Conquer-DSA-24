/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (a1, a2) {
  let output = [];

  let map = {};

  for (let i = 0; i < a1.length; i++) {
    if (map[a1[i]] != undefined) {
      continue;
    } else {
      map[a1[i]] = 1;
    }
  }

  for (let i = 0; i < a2.length; i++) {
    if (map[a2[i]] != undefined) {
      delete map[a2[i]];
      output.push(a2[i]);
    }
  }

  return output;
};
