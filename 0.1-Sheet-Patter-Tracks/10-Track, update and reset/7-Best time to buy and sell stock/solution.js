// same as finding max diff in array where arr[j] > arr[i]

var maxProfit = function (nums) {
  let maxDiff = 0;
  let diff = 0;
  let min = nums[0];

  let i = 1;
  while (i < nums.length) {
    if (nums[i] > nums[i - 1]) {
      diff = nums[i] - min;
      maxDiff = Math.max(maxDiff, diff);
    } else {
      min = Math.min(nums[i], min);
    }

    console.log(maxDiff, min);

    i++;
  }

  i++;

  return Math.max(maxDiff, diff);
};
