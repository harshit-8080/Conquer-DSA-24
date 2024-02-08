/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (arr) {
  let prefix = new Array(arr.length).fill(1);
  let suffix = new Array(arr.length).fill(1);

  for (let i = 1; i < arr.length; i++) {
    prefix[i] = prefix[i - 1] * arr[i - 1];
  }

  for (let i = arr.length - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] * arr[i + 1];
  }

  let output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(prefix[i] * suffix[i]);
  }

  return output;
};
