/*

Idea :->

1. Find minimum element in every iteration and place it at correct position.

2. So first minimum element will be at 0th index, then at 1st index, then at 2nd index.

3. After finding n-1 minimum element and placing it at correct position. Our array will be sorted

*/

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
}
