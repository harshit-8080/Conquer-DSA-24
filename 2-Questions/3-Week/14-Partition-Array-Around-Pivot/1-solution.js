//* https://leetcode.com/problems/partition-array-according-to-given-pivot/description/

/*

BF Idea
----------------------------------------------------------------

1. Create three extra array. 
2. One for leftPart[], One for mid[]  & One for rightPart[]

3. Insert elements less than pivot to leftPart[]
4. Insert elements greater than pivot to rightPart[]
5. Insert elements equal to pivot to midPart[]

6. At last concat left[] + mid[] + right[]


*/
var pivotArray = function (arr, pivot) {
  let left = [],
    right = [],
    mid = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      mid.push(arr[i]);
    }
  }

  return left.concat(mid, right);
};
