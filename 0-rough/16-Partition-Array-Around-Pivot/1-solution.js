var pivotArray = function (arr, pivot) {
  let output = new Array(arr.length).fill(pivot);

  let left = 0,
    right = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      output[left] = arr[i];
      left++;
    }
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > pivot) {
      output[right] = arr[i];
      right--;
    }
  }

  return output;
};
