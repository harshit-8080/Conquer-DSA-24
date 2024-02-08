/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (arr) {
  let nextUnique = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] != arr[i - 1]) {
      arr[nextUnique] = arr[i];
      nextUnique++;
    }
  }

  return nextUnique;
};
