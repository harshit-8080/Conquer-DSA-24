/*

1. While climbing (current > previousElement) to mountain.
  1. Keep updating our peak variable.

2. For first time, When we see (current < previousElement).
  1. Update the flag.
  2. Now Since we are moving down from peak, Our current should always less than previousElement.
  3. Anytime now if we see anti pattern (current > previousElement). IMMEDIATELY return false.
   
3. At the last check for one edge case
  1. If we never found move down meaning (current < previousElement)
  2. Return false for above situation
  3. else return true (since everything looks good)

*/

//* https://leetcode.com/problems/valid-mountain-array/description/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  let flag = true;
  let peak;
  if (arr.length < 3) {
    return false;
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1] && flag) {
      peak = arr[i];
      continue;
    } else {
      if (!peak) {
        return false;
      }
      flag = false;
      if (!flag) {
        if (arr[i] < arr[i - 1]) {
          continue;
        } else {
          return false;
        }
      }
    }
  }

  return flag ? false : true;
};
