/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let s1 = "Fizz";
  let s2 = "Buzz";
  let s3 = "FizzBuzz";

  let result = [];
  let for15 = 15,
    for5 = 5,
    for3 = 3;
  for (let i = 1; i <= n; i++) {
    if (i == for15) {
      result.push(s3);
      for15 = for15 + 15;
      for3 = for3 + 3;
      for5 = for5 + 5;
    } else if (i == for5) {
      result.push(s2);
      for5 = for5 + 5;
    } else if (i == for3) {
      result.push(s1);
      for3 = for3 + 3;
    } else {
      result.push(String(i));
    }
  }

  return result;
};
