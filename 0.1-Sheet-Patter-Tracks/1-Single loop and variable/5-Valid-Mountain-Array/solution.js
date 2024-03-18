/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  let peakCount = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      peakCount++;
      if (peakCount > 1) {
        return false;
      }
    } else if (arr[i] < arr[i - 1] && arr[i] < arr[i + 1]) {
      return false;
    } else if (arr[i] == arr[i - 1] || arr[i] == arr[i + 1]) {
      return false;
    }
  }

  return peakCount == 1 ? true : false;
};
