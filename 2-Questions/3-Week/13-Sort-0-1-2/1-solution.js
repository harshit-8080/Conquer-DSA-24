var sortColors = function (nums) {
  nextZero = 0;
  nextTwo = nums.length - 1;

  temp = 0;
  i = 0;
  while (i <= nextTwo) {
    if (nums[i] == 0) {
      temp = nums[i];
      nums[i] = nums[nextZero];
      nums[nextZero] = temp;

      nextZero++;
      i++;
    } else if (nums[i] == 2) {
      temp = nums[i];
      nums[i] = nums[nextTwo];
      nums[nextTwo] = temp;

      nextTwo--;
    } else {
      i++;
    }
  }
};
