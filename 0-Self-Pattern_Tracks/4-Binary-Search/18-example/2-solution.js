function binarysearch(arr, target, left, right) {
  console.log(arr);
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] == target) {
      return mid;
    } else if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
//Function to search a given number in row-column sorted matrix.
function search(arr, n, m, x) {
  //  console.log(x)

  if (n == 1) {
    console.log(arr[0]);
    let result = this.binarysearch(arr[0], x, 0, m - 1);

    console.log(result);
    if (result != -1) {
      return 1;
    } else {
      return 0;
    }
  }

  let left = 0,
    right = n - 1;
  let column = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid][column] == x) {
      return 1;
    }
    if (arr[mid][column] < x) {
      let tempArr = arr[mid];
      let result = this.binarysearch(tempArr, x, mid, m - 1);

      if (result != -1) {
        return 1;
      } else {
        left = mid + 1;
      }
    } else if (arr[mid][column] < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return 0;
}
