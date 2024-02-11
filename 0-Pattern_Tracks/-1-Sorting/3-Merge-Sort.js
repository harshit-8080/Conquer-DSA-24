function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);

  let leftArray = arr.slice(0, mid);
  let rightArray = arr.slice(mid);

  mergeSort(leftArray);
  mergeSort(rightArray);

  merge(arr, leftArray, rightArray);
}

function merge(arr, leftArray, rightArray) {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] < rightArray[j]) {
      arr[k] = leftArray[i];
      k++;
      i++;
    } else {
      arr[k] = rightArray[j];
      k++;
      j++;
    }
  }

  while (i < leftArray.length) {
    arr[k] = leftArray[i];
    k++;
    i++;
  }

  while (j < rightArray.length) {
    arr[k] = rightArray[j];
    k++;
    j++;
  }
}

const arr = [17, 2, 25, 3, 9, 1, 8, 4, 16];
mergeSort(arr);
console.log(arr);
