function getSmallerElementIndex(arr) {
  let n = arr.length;
  let left = 0,
    right = n - 1;

  while (left <= right) {
    if (arr[left] <= arr[right]) {
      return left;
    }
    let mid = Math.floor((left + right) / 2);

    let next = (mid + 1) % n;
    let prev = (mid + n - 1) % n;

    if (arr[mid] < arr[prev] && arr[mid] < arr[next]) {
      return mid;
    } else if (arr[left] > arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}

var search = function (nums, target) {
  smallerElementIndex = getSmallerElementIndex(nums);

  console.log(smallerElementIndex);
  r1 = binarysearch(nums, 0, smallerElementIndex - 1, target);
  if (r1 != -1) {
    return r1;
  }
  r2 = binarysearch(nums, smallerElementIndex, nums.length - 1, target);

  return r2;
};

function binarysearch(arr, left, right, k) {
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] == k) {
      return mid;
    } else if (arr[mid] < k) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
