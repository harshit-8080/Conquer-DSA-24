function sumOfNNaturalNumber(n) {
  if (n == 1) {
    return 1;
  }

  smallInputSum = sumOfNNaturalNumber(n - 1);
  return n + smallInputSum;
}

console.log(sumOfNNaturalNumber(4));
console.log(sumOfNNaturalNumber(5));
console.log(sumOfNNaturalNumber(6));
console.log(sumOfNNaturalNumber(10));
