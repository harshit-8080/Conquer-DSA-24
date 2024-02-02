/*

BF Idea :-
----------------------------------------------------------------

1. Sort the array and use two pointers to get a pair sum

*/

function hasArrayTwoCandidates(arr, n, x) {
  arr.sort((a, b) => a - b);

  let left = 0;
  let right = n - 1;

  while (left < right) {
    if (arr[left] + arr[right] == x) {
      return true;
    } else if (arr[left] + arr[right] > x) {
      right--;
    } else {
      left++;
    }
  }

  return false;
}
