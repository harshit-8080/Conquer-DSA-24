/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let n = matrix.length;

  let newMatrix = new Array(n).fill(1).map(() => new Array(n).fill(1));

  let col = n - 1;
  for (let i = 0; i < n; i++) {
    row = 0;
    for (let j = 0; j < n; j++) {
      newMatrix[row][col] = matrix[i][j];
      console.log(newMatrix[row][col]);
      row++;
    }
    col = col - 1;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrix[i][j] = newMatrix[i][j];
    }
  }
};
