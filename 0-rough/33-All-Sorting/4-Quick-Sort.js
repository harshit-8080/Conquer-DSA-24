function partition(arr, left, right) {
  let partitionIndex = left;
  let pivot = arr[right];

  while (left <= right) {
    if (arr[left] < pivot) {
      let temp = arr[partitionIndex];
      arr[partitionIndex] = arr[left];
      arr[left] = temp;

      partitionIndex++;
    }
    left++;
  }

  let temp = arr[partitionIndex];
  arr[partitionIndex] = arr[right];
  arr[right] = temp;

  return partitionIndex;
}

function quickSort(arr, left, right) {
  if (left >= right) {
    return;
  }
  let pivotIndex = partition(arr, left, right);
  quickSort(arr, left, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, right);
}

let arr = [10, 9, 18, 3, 4, 5];

quickSort(arr, 0, arr.length - 1);

console.log(arr);
