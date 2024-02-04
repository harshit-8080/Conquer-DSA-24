/*

Efficient Idea 
----------------------------------------------------------------

1. Put Two pointer one at 0th index and second at 1st index

2. Now We need to maintain two things --> minElement and maxDiff

3. Start iterating through array and update minElement if arr[i] is smaller.

4. And also update maxDiff with Maximum of (maxDiff,currentDiff)

5. Keep doing this until second pointer reaches to end of array.

*/

//* https://leetcode.com/problems/maximum-difference-between-increasing-elements/description/

var maximumDifference = function (arr) {
  let min = Infinity,
    maxDiff = -1;

  let i = 0,
    j = 1;

  while (j < arr.length) {
    if (arr[j] > arr[i]) {
      min = Math.min(min, arr[i]);
      diff = arr[j] - min;
      maxDiff = Math.max(maxDiff, diff);
      console.log(maxDiff);
      i++;
      j++;
    } else {
      i++;
      j++;
    }
  }

  return maxDiff;
};
