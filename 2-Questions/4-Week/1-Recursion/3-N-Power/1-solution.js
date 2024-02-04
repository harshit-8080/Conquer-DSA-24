function power(base, exponent) {
  if (exponent == 1) {
    return base;
  }

  smallPower = power(base, exponent - 1);
  return base * smallPower;
}

console.log(power(2, 3));
console.log(power(2, 4));
console.log(power(2, 5));
console.log(power(3, 3));
console.log(power(3, 4));
console.log(power(5, 2));
console.log(power(5, 5));
console.log(power(1, 9));
console.log(power(9, 2));
console.log(power(9, 3));
