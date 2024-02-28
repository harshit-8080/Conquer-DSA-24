//Function to find triplets with zero sum.
function findTriplets(arr, n) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    let x = arr[i];

    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      if (x + arr[left] + arr[right] == 0) {
        return true;
      } else if (x + arr[left] + arr[right] > 0) {
        right = right - 1;
      } else {
        left = left + 1;
      }
    }
  }

  return false;
}
