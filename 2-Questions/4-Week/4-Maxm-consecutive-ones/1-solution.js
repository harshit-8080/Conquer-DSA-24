var findMaxConsecutiveOnes = function (nums) {
  let maxOne = 0;
  let countOne = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      countOne += 1;
    } else {
      maxOne = Math.max(maxOne, countOne);
      countOne = 0;
    }
  }

  maxOne = Math.max(maxOne, countOne);
  return maxOne;
};
