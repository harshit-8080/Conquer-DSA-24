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
