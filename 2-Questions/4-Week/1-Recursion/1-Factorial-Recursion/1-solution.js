function factorial(n) {
  if (n == 1 || n == 0) {
    return 1;
  }

  let factorialExceptN = factorial(n - 1);
  return n * factorialExceptN;
}

let x = factorial(5);
console.log(x);
