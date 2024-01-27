/*

Basic Idea here :-
----------------------------------------------------------------
1. Keep Calcaulting Prefix and Suffix Product for ith Element
2. Pushing product of prefix and suffix. 
3. This calculation will be the result of ith element.


*/

// * leetcode.com/problems/product-of-array-except-self/

https: function productBetween(arr, start, end) {
  product = 1;
  for (let i = start; i <= end; i++) {
    product = product * arr[i];
  }
  return product;
}

var productExceptSelf = function (nums) {
  prefix = 0;
  suffix = 0;

  output = [];
  for (let i = 0; i < nums.length; i++) {
    prefix = productBetween(nums, 0, i - 1);
    suffix = productBetween(nums, i + 1, nums.length - 1);

    console.log(prefix, suffix);
    output.push(prefix * suffix);
  }

  return output;
};
