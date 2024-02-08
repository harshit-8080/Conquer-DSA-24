/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (arr, m, brr, n) {
  let output = [];

  let i = 0,
    j = 0;

  while (i < m && j < n) {
    if (arr[i] < brr[j]) {
      output.push(arr[i]);
      i++;
    } else {
      output.push(brr[j]);
      j++;
    }
  }

  while (i < m) {
    output.push(arr[i]);
    i++;
  }
  while (j < n) {
    output.push(brr[j]);
    j++;
  }
  for (let i = 0; i < output.length; i++) {
    arr[i] = output[i];
  }
};
