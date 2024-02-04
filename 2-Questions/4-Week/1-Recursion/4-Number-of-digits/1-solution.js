function NumberofDigits(n) {
  if (n == 0) {
    return 0;
  }

  smallInput = NumberofDigits(Math.floor(n / 10));
  return 1 + smallInput;
}

console.log(NumberofDigits(123));
console.log(NumberofDigits(1));
console.log(NumberofDigits(12));
console.log(NumberofDigits(9999999));
console.log(NumberofDigits(78787));
console.log(NumberofDigits(7878));
console.log(NumberofDigits(1000));
