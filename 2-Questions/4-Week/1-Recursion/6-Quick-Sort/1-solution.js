/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;
};

function quickSort(arr, left, right) {
  if (left >= right) {
    return;
  }

  let pivotIndex = partition(arr, left, right);

  quickSort(arr, left, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, right);
}

function partition(arr, left, right) {
  let pivot = arr[right];
  let partitionIndex = left;

  for (let i = left; i <= right; i++) {
    if (arr[i] < pivot) {
      temp = arr[partitionIndex];
      arr[partitionIndex] = arr[i];
      arr[i] = temp;
      partitionIndex++;
    }
  }

  temp = arr[partitionIndex];
  arr[partitionIndex] = arr[right];
  arr[right] = temp;

  return partitionIndex;
}
