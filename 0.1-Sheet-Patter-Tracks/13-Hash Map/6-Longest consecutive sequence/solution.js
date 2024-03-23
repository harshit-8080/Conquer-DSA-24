/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (arr) {
  if (arr.length == 0) {
    return 0;
  }
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] != undefined) {
      continue;
    } else {
      map[arr[i]] = 1;
    }
  }

  let resultMax = 1;
  let curr = 1;
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i] - 1] != undefined) {
      continue;
    } else {
      let curElement = arr[i];
      if (map[curElement - 1]) {
        continue;
      }
      while (map[curElement + 1] != undefined) {
        curr++;
        curElement++;
      }
      resultMax = Math.max(resultMax, curr);
      curr = 1;
    }
  }

  return Math.max(resultMax, curr);
};
