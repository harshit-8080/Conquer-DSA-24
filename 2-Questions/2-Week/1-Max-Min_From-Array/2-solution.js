// * Idea is to check in pair
// * If we do check in pairs, We can settle 2 elements in 3 checks
// * In solution 1, For every elements we were doing 2 checks.

function findSum(A, N) {
  let max, min, i;

  if (N % 2 != 0) {
    max = A[0];
    min = A[0];
    i = 1;
  } else {
    if (A[0] < A[1]) {
      max = A[1];
      min = A[0];
    } else {
      max = A[0];
      min = A[1];
    }
    i = 2;
  }

  for (i; i < A.length; i += 2) {
    if (A[i] < A[i + 1]) {
      if (A[i] < min) {
        min = A[i];
      }
      if (A[i + 1] > max) {
        max = A[i + 1];
      }
    } else {
      if (A[i + 1] < min) {
        min = A[i + 1];
      }
      if (A[i] > max) {
        max = A[i];
      }
    }
  }

  console.log(max, min);
}
