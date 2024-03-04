/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;

  let columnIndex = n - 1;
  for (let i = 0; i < m; i++) {
    if (matrix[i][columnIndex] == target) {
      return true;
    }
    while (columnIndex >= 0) {
      if (matrix[i][columnIndex] == target) {
        return true;
      } else if (matrix[i][columnIndex] < target) {
        break;
      } else {
        columnIndex--;
      }
    }
  }

  return false;
};
