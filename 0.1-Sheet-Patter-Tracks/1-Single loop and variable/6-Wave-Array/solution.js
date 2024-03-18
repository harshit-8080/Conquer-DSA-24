function convertToWave(n, arr) {
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
