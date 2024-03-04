function firstOccurence(arr, k) {
  //* Because leetcode doesn't sorted matrix
  arr.sort((a, b) => a - b);

  let left = 0,
    right = arr.length;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] == k) {
      if (mid == 0) {
        return mid;
      } else if (arr[mid - 1] != k) {
        return mid;
      } else {
        right = mid - 1;
      }
    } else if (arr[mid] < k) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

var rowAndMaximumOnes = function (mat) {
  let maxOne = 0;
  let rowIndex = 0;
  let m = mat.length;
  let n = mat[0].length;

  for (let i = 0; i < m; i++) {
    firstIndex = firstOccurence(mat[i], 1);
    console.log("firstIndex ", firstIndex);
    if (firstIndex == -1) {
      continue;
    } else {
      count = n - firstIndex;
      if (count > maxOne) {
        maxOne = count;
        rowIndex = i;
      }
    }
  }

  return [rowIndex, maxOne];
};
