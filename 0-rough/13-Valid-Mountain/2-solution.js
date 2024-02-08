/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  if (arr.length < 3) {
    return false;
  }

  let peakCount = 0;
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      peakCount++;
    } else if (arr[i] < arr[i - 1] && arr[i] < arr[i + 1]) {
      return false;
    } else if (arr[i] == arr[i + 1] && arr[i] == arr[i + 1]) {
      return false;
    }
  }

  return peakCount == 1;
};
