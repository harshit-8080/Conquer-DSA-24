/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (arr) {
  let result = 0;
  let countOne = 0;
  let i = 0;
  while (i < arr.length) {
    if (arr[i] == 1) {
      countOne++;
    } else {
      result = Math.max(result, countOne);
      countOne = 0;
    }
    i++;
  }

  return Math.max(result, countOne);
};
