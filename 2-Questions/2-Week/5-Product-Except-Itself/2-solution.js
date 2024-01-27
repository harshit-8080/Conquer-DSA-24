/**

1. Make prefix and suffix two arrays

2. Calculate prefix product and suffix product for ith element.

3. Once prefix and suffix product is calculated. 
    1. For every ith element in array.
    2. Calculate --> prefix[i] * suffix[i]
    3. Keeping saving it. 
    4. Finally Return it. 

*/

// * leetcode.com/problems/product-of-array-except-self/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let n = nums.length;
  let prefix = new Array(n).fill(1);
  let suffix = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    x = prefix[i - 1] * nums[i - 1];
    prefix[i] = x;
  }

  for (let i = n - 2; i >= 0; i--) {
    x = suffix[i + 1] * nums[i + 1];
    suffix[i] = x;
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = prefix[i] * suffix[i];
  }

  return nums;
};
