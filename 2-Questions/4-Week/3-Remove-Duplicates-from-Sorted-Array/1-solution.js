/*

Using extra unique[]

1. Compare if arr[i] != arr[i-1]. If True this unique element add it to our unique[]

2. Else it's duplicat element move on

*/

var removeDuplicates = function (arr) {
  let unique = [];
  unique.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] != arr[i - 1]) {
      unique.push(arr[i]);
    }
  }

  for (let i = 0; i < unique.length; i++) {
    arr[i] = unique[i];
  }
  return unique.length;
};
