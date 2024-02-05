function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] == target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

console.log(binarySearch([10, 20, 30, 40, 50, 60], 20));
console.log(binarySearch([10, 20, 30, 40, 50, 60], 10));
console.log(binarySearch([10, 20, 30, 40, 50, 60], 60));
console.log(binarySearch([10, 20, 30, 40, 50, 60], 50));

console.log(binarySearch([10, 20, 30, 40, 50, 60, 70], 50));
console.log(binarySearch([10, 20, 30, 40, 50, 60, 70], 70));
