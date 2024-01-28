/*

Basic Idea ->

1. First sort the array.
2. Once array is sorted, Now take alternate elements and place them to output array.

3. Alternate means
    1. Original Array --> a[0], a[1], a[2], a[3], a[4]
    2. Output Array --> a[1], a[0], a[3], a[2], a[4]
    
*/

function convertToWave(n, arr) {
  arr.sort((a, b) => a - b);
  let output = new Array(n);

  for (let i = 0; i < arr.length; i += 2) {
    if (i == n - 1) {
      output[i] = arr[i];
      continue;
    }
    output[i] = arr[i + 1];
    output[i + 1] = arr[i];
  }

  return output;
}
