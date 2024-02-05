/**

Two Pointer approache
----------------------------------------------------------------

1. First and Second Pointer.

2. Check if arr[first] != arr[second]. first++ --> Then only assign arr[first] = arr[second]

3. return first + 1

*/

var removeDuplicates = function (nums) {
  let first = 0;
  let second = 0;

  while (second < nums.length) {
    if (nums[second] != nums[first]) {
      first++;
      nums[first] = nums[second];
    }
    second++;
  }

  return first + 1;
};
