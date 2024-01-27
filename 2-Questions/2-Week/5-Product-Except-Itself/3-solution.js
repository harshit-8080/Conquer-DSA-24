/**

1. IMPORTTANT -> If in given array, zero count is more than 1. Then all elements will be 0.
  
2. Run a loop and do below things
   1. Count elements those are zero.
   2. Calculate totalProduct of elements
   3. Calculate product of non-zero elements as well ( WHY --> When we have single 0 element this would help) 

3. If countZero > 1.--> Store 0 every place and return. 

3. Run a loop again for storing results

   1. If element is zero then we can store product of non-zero (above - Point 2.3)
   2. Else using divde the current element from totalProdcut

*/

// * leetcode.com/problems/product-of-array-except-self/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let countZero = 0;
  let productForZeroElement = 1;
  toatlProduct = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      countZero++;
    } else if (nums[i] != 0) {
      productForZeroElement = productForZeroElement * nums[i];
    }

    toatlProduct = toatlProduct * nums[i];
  }

  if (countZero > 1) {
    return new Array(nums.length).fill(0);
  }
  output = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      output[i] = productForZeroElement;
    } else {
      output[i] = Math.floor(toatlProduct / nums[i]);
    }
  }

  return output;
};
