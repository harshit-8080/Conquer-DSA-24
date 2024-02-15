function FindMinimumDifferenceElementInASortedArray(arr, target) {
  floorElement = floorElementFromArray(arr, target);
  ceilElement = ceilElementFromArray(arr, target);

  if (!floorElement) {
    return ceilElement;
  } else if (!ceilElement) {
    return floorElement;
  }

  let x, y;

  if (target > floorElement) {
    x = target - floorElement;
  } else {
    x = floorElement - target;
  }

  if (target > ceilElement) {
    y = target - ceilElement;
  } else {
    y = ceilElement - target;
  }

  if (x <= y) {
    return floorElement;
  } else {
    return ceilElement;
  }
}

function floorElementFromArray(arr, x) {
  let left = 0,
    right = arr.length;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] == x) {
      return arr[mid];
    }
    if (arr[mid] < x) {
      if (mid == arr.length - 1) {
        return arr[mid];
      } else if (arr[mid + 1] > x) {
        return arr[mid];
      } else {
        left = mid + 1;
      }
    } else if (arr[mid] < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
}

function ceilElementFromArray(arr, x) {
  let left = 0,
    right = arr.length;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] == x) {
      return arr[mid];
    }
    if (arr[mid] >= x) {
      if (mid == 0) {
        return arr[mid];
      } else if (arr[mid - 1] < x) {
        return arr[mid];
      } else {
        right = mid - 1;
      }
    } else if (arr[mid] < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
}

console.log(FindMinimumDifferenceElementInASortedArray([2, 5, 10, 12, 15], 6));
console.log(FindMinimumDifferenceElementInASortedArray([2, 5, 10, 12, 15], 5));
console.log(FindMinimumDifferenceElementInASortedArray([2, 5, 10, 12, 15], 8));
console.log(FindMinimumDifferenceElementInASortedArray([2, 5, 10, 12, 15], 11));
console.log(FindMinimumDifferenceElementInASortedArray([2, 5, 10, 12, 15], 20));
