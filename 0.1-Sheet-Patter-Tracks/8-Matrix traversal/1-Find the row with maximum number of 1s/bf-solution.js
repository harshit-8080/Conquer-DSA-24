/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function (mat) {
  let maxOne = 0;
  let rowIndex = 0;
  let m = mat.length;
  let n = mat[0].length;

  for (let i = 0; i < m; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (mat[i][j] == 1) {
        count++;
      }
    }

    if (count > maxOne) {
      maxOne = count;
      rowIndex = i;
    }
  }

  return [rowIndex, maxOne];
};
