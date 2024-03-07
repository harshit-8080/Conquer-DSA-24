/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let s1 = "Fizz";
  let s2 = "Buzz";
  let s3 = "FizzBuzz";

  let result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      result.push(s3);
    } else if (i % 5 == 0) {
      result.push(s2);
    } else if (i % 3 == 0) {
      result.push(s1);
    } else {
      result.push(String(i));
    }
  }

  return result;
};
