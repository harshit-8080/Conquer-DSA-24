// * https://leetcode.com/problems/product-of-array-except-self/

var productExceptSelf = function (arr) {
  let totalProduct = 1,
    zeroCount = 0,
    productWithOutZero = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      zeroCount++;
    } else productWithOutZero = productWithOutZero * arr[i];

    totalProduct = totalProduct * arr[i];
  }

  if (zeroCount >= 2) {
    return new Array(arr.length).fill(0);
  }

  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      product = Math.floor(totalProduct / arr[i]);
    } else {
      product = Math.floor(productWithOutZero);
    }

    output.push(product);
  }

  return output;
};
