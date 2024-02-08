/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (arr, pivot) {
  let output = new Array(arr.length).fill(pivot);

  let nextSmaller = 0,
    nextGreater = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      output[nextSmaller] = arr[i];
      nextSmaller++;
    }
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > pivot) {
      output[nextGreater] = arr[i];
      nextGreater--;
    }
  }

  return output;
};
