/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  let n = mat.length;

  let leftD = 0;
  let rightD = 0;

  (row = 0), (col = 0);
  for (let i = 0; i < n; i++) {
    leftD = leftD + mat[row][col];
    row++;
    col++;
  }

  row = 0;
  col = n - 1;
  for (let i = 0; i < n; i++) {
    rightD = rightD + mat[row][col];
    row++;
    col--;
  }

  if (n % 2 == 0) {
    return leftD + rightD;
  }

  let mid = Math.floor(n / 2);
  ts = leftD + rightD - mat[mid][mid];

  return ts;
};
