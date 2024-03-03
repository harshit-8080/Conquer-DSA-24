/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */

function findFloor(arr, n, x) {
  let left = 0,
    right = n - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (arr[mid] <= x) {
      if (mid == n - 1) {
        return mid;
      } else if (x < arr[mid + 1]) {
        return mid;
      } else {
        left = mid + 1;
      }
    } else if (arr[mid] < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return n - 1;
}

function findCeil(arr, n, x) {
  let left = 0,
    right = n - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (arr[mid] >= x) {
      if (mid == 0) {
        return mid;
      } else if (x > arr[mid - 1]) {
        return mid;
      } else {
        right = mid - 1;
      }
    } else if (arr[mid] <= x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return 0;
}

var findClosestElements = function (arr, k, x) {
  let n = arr.length;
  if (x < arr[0]) {
    return arr.slice(0, k);
  } else if (x > arr[n - 1]) {
    return arr.slice(-k);
  }

  result = [];
  while (k != 0) {
    let left = 0,
      right = arr.length - 1;

    mid = Math.floor((left + right) / 2);
    if (arr[mid] == x) {
      result.push(x);
      arr.splice(mid, 1);
    } else {
      floorIndex = findFloor(arr, arr.length, x);
      ceilIndex = findCeil(arr, arr.length, x);

      if (Math.abs(arr[floorIndex] - x) <= Math.abs(arr[ceilIndex] - x)) {
        // console.log(arr, floorIndex, arr[floorIndex])
        result.push(arr[floorIndex]);
        arr.splice(floorIndex, 1);
      } else {
        // console.log(arr, ceilIndex, arr[ceilIndex])
        result.push(arr[ceilIndex]);
        arr.splice(ceilIndex, 1);
      }
    }

    k--;
  }

  result.sort((a, b) => a - b);
  return result;
};
