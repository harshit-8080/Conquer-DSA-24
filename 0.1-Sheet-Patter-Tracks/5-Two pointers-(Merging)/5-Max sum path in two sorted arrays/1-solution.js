function max_path_sum(a, b, M, N) {
  let i = 0,
    j = 0,
    sum1 = 0,
    sum2 = 0,
    result = 0;

  while (i < a.length && j < b.length) {
    if (a[i] == b[j]) {
      sum2 = sum2 + b[j];
      sum1 = sum1 + a[i];

      result = result + Math.max(sum1, sum2);

      sum1 = 0;
      sum2 = 0;

      i++;
      j++;
    } else if (a[i] > b[j]) {
      sum2 = sum2 + b[j];
      j++;
    } else {
      sum1 = sum1 + a[i];
      i++;
    }
  }

  while (i < a.length) {
    sum1 = sum1 + a[i];
    i++;
  }
  while (j < b.length) {
    sum2 = sum2 + b[j];
    j++;
  }

  return result + Math.max(sum1, sum2);
}
