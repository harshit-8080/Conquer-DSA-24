/**

BF IDEA 
--------------------------------------------------------------------------------

Using Two Nested Loops and calculate maxDiff from array

*/

var maximumDifference = function (arr) {
  let maxDiff = -1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        diff = arr[j] - arr[i];
        if (maxDiff < diff) {
          maxDiff = diff;
        }
      }
    }
  }

  return maxDiff;
};
