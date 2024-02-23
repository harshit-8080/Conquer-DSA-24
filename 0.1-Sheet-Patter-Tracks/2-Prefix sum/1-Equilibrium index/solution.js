// * https://www.enjoyalgorithms.com/blog/find-equilibrium-index-of-an-array

function equilibriumPoint(arr, n) {
  let prefix = 0;
  let suffix = 0;

  for (let i = 1; i < n; i++) {
    suffix = suffix + arr[i];
  }

  for (let i = 0; i < n; i++) {
    if (prefix == suffix) {
      return i;
    } else {
      prefix = prefix + arr[i];
      if (i < n - 1) {
        suffix = suffix - arr[i + 1];
      }
    }
  }

  return -1;
}
