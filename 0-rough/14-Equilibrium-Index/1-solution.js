/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (arr) {
  let leftSum = 0;
  let rightSum = 0;

  for (let i = 1; i < arr.length; i++) {
    rightSum = rightSum + arr[i];
  }

  for (let i = 0; i < arr.length; i++) {
    if (leftSum == rightSum) {
      return i;
    }

    if (i < arr.length - 1) {
      leftSum = leftSum + arr[i];
      rightSum = rightSum - arr[i + 1];
    }
  }

  return -1;
};
