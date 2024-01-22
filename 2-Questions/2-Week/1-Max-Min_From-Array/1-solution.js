// * Idea is simple, Keeping max & min and iterating through the array
// * For arr[i] element, Check for with our max & min
// * Update max if arr[i] > max
// * Update min if arr[i] < min

function findSum(A) {
  let max = A[0];
  let min = A[0];

  for (let i = 1; i < A.length; i++) {
    if (A[i] > max) {
      max = A[i];
    }
    if (A[i] < min) {
      min = A[i];
    }
  }
  console.log("max: " + max);
  console.log("min: " + min);
}
