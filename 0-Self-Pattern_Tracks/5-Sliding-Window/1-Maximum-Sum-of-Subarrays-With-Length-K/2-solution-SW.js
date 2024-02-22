function maximumSumSubarray(k, arr, n) {
  let maxSum = 0,
    sum = 0;

  for (let i = 0; i < k; i++) {
    sum = sum + arr[i];
  }

  maxSum = Math.max(maxSum, sum);

  for (let i = 1; i <= n - k; i++) {
    sum = sum - arr[i - 1];
    sum = sum + arr[i + k - 1];

    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
}
