function maximumSumSubarray(k, arr, n) {
  let i = 0,
    j = 0,
    sum = 0,
    maxSum = 0;

  while (j < n) {
    sum = sum + arr[j];

    if (j - i + 1 == k) {
      maxSum = Math.max(maxSum, sum);
      sum = sum - arr[i];
      i++;
    }
    j++;
  }

  return Math.max(maxSum, sum);
}
