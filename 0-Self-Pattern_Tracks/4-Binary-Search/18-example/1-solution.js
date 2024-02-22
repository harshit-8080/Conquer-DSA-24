// * https://www.geeksforgeeks.org/problems/search-in-a-matrix-1587115621

function search(arr, n, m, x) {
  let i = 0,
    j = m - 1;

  while (i <= n - 1 && j >= 0) {
    let mid = arr[i][j];

    if (mid == x) {
      return 1;
    } else if (mid > x) {
      j = j - 1;
    } else if (mid < x) {
      i = i + 1;
    }
  }

  return 0;
}
