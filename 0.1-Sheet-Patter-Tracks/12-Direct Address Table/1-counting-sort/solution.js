/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  const N = nums.length;

  let M = 0;
  for (let i = 0; i < N; i++) {
    M = Math.max(M, nums[i]);
  }

  const countArray = new Array(M + 1).fill(0);

  // storing count of elements at there indexes
  for (let i = 0; i < N; i++) {
    countArray[nums[i]] = countArray[nums[i]] + 1;
  }

  // calculate prefix sum
  for (let i = 1; i <= M; i++) {
    countArray[i] = countArray[i - 1] + countArray[i];
  }

  const outputArray = new Array(N);

  // start from last index
  // Place nums[i] at there correct position
  // How to place
  // 1. get the index from countArray[nums[i] - 1] and store it in outputArray
  // 2. Ater the placing that do -> -1 from countArray[nums[i]]
  for (let i = N - 1; i >= 0; i--) {
    outputArray[countArray[nums[i]] - 1] = nums[i];
    countArray[nums[i]] = countArray[nums[i]] - 1;
  }

  return outputArray;
};
