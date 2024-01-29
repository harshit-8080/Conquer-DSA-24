/*

Idea :->

1. In insertion sort, We have idea for sorted and unsorted portion.

2. We will assume 0th index element is in sorted portion. 

3. Now start form 1st index element and place them at correct position.

    1. How to place them at correct position.
    2. We can in reverse direction and Either stop if greater element is found.
    3. Or We reached till 0th index.
    4. While going in reverse direction, We will also keep moving elements to right.
    
4. Either of two cases above mentioned. We will place the our current element.    

*/

function insertionSort(arr, n) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
}
