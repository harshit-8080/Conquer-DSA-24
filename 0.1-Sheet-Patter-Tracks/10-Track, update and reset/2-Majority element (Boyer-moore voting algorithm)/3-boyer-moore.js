var majorityElement = function (nums) {
  let majCandidate = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count == 0) {
      majCandidate = nums[i];
    }

    if (nums[i] == majCandidate) {
      count++;
    } else {
      count--;
    }
  }

  return majCandidate;
};
