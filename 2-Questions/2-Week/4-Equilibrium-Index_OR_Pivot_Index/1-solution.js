/**
 
1. Using leftSum and rightSum approach

2. Consider 0th index as Pivot or equilibrium index.
    1. So LeftSum would be zero.
    2. And RightSum would be ( sum of elements from arr[pivot+1] to arr[n])

3. Now Iterate through the loop and keep checking for leftSum == rightSum
    1. If we find (leftSum == rightSum) --> Return Pivot Index.

4. If we find (leftSum != rightSum) then
    1. Include/Add pivot consider element to leftSum ----> leftSum = leftSum + arr[pivot]   
    2. Remove/Subtract ----> rightSum = rightSum - arr[pivot+1]
    3. Increase pivot by 1 (Because next element may be pivot )


5. At Last Return return -1 (Because, Not found a situation where leftSum == rightSum)    
*/

// * https://leetcode.com/problems/find-pivot-index/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (arr) {
  let rightSum = 0;
  let leftSum = 0;
  let pivot = 0;

  for (let i = pivot + 1; i < arr.length; i++) {
    rightSum = rightSum + arr[i];
  }

  for (let i = pivot; i < arr.length; i++) {
    if (leftSum == rightSum) {
      return pivot;
    } else {
      leftSum = leftSum + arr[pivot];
      rightSum = rightSum - arr[pivot + 1];
      pivot++;
    }
  }
  return -1;
};
