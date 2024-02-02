/*

BF Idea :-
----------------------------------------------------------------

1. Run nested loop and check for every pair

*/

function hasArrayTwoCandidates(arr, n, x) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i != j) {
        if (arr[i] + arr[j] == x) {
          return true;
        }
      }
    }
  }

  return false;
}
