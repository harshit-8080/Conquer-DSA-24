/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

function markRow(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      arr[i] = null;
    }
  }
}
function markCol(matrix, colIndex) {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][colIndex] != 0) {
      matrix[i][colIndex] = null;
    }
  }
}
var setZeroes = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] == 0) {
        markRow(matrix[i]);
        markCol(matrix, j);
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] == null) {
        matrix[i][j] = 0;
      }
    }
  }
};
