/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

function popSmaller(x, element) {
  //console.log(x)

  if (element < x[x.length - 1]) {
    return x;
  } else if (element > x[x.length - 1]) {
    return [];
  }

  let a = [];
  for (let i = 0; i < x.length; i++) {
    if (x[i] >= element) {
      a.push(x[i]);
    }
  }

  return a;
}
var maxSlidingWindow = function (arr, k) {
  if (k == 1) {
    return arr;
  }
  let n = arr.length;
  let x = [];

  let result = [];

  let i = 0,
    j = 0;

  while (j < n) {
    x = popSmaller(x, arr[j]);

    x.push(arr[j]);

    if (j - i + 1 == k) {
      result.push(x[0]);

      if (arr[i] == x[0]) {
        x.shift();
      }
      i++;
    }

    j++;
  }

  return result;
};
