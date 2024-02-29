/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
  let n = nums.length;
  let newArr = new Array(nums.length).fill(pivot);

  greaterThan = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > pivot) {
      greaterThan++;
    }
  }

  let k1 = 0,
    k2 = n - greaterThan;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > pivot) {
      newArr[k2] = nums[i];
      k2++;
    } else if (nums[i] < pivot) {
      newArr[k1] = nums[i];
      k1++;
    }
  }

  return newArr;
};
