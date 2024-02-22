function printFirstNegativeInteger(n, k, arr) {
  let i = 0,
    j = 0;
  let firstNegative = [];

  let result = [];

  while (j < n) {
    if (arr[j] < 0) {
      firstNegative.push(arr[j]);
    }

    if (j - i + 1 == k) {
      if (firstNegative[0] != undefined) {
        result.push(firstNegative[0]);
      } else {
        result.push(0);
      }

      if (arr[i] == firstNegative[0]) {
        firstNegative.shift();
      }
      i++;
    }

    j++;
  }

  return result;
}
