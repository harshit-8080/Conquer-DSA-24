/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  let climb = false;
  let down = false;
  let peakFound = false;

  let prevElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    if (curr > prevElement && !peakFound) {
      climb = true;
    } else {
      if (curr < prevElement && !peakFound) {
        peakFound = true;
        down = true;
      } else if (!(peakFound && down && curr < prevElement)) {
        return false;
      }
    }
    prevElement = curr;
  }

  if (!climb || !peakFound || !down) {
    return false;
  }

  return true;
};
