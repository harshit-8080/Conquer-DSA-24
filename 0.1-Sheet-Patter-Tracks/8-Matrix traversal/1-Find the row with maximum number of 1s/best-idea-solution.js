var rowAndMaximumOnes = function (mat) {
  let m = mat.length;
  let n = mat[0].length;

  //* Because leetcode doesn't sorted matrix
  for (let i = 0; i < m; i++) {
    mat[i].sort((a, b) => a - b);
  }

  let columnIndex = n - 1;
  let maxOne = 0,
    rowIndex = 0;
  for (let i = 0; i < m; i++) {
    while (columnIndex >= 0 && mat[i][columnIndex] == 1) {
      columnIndex--;
      maxOne++;
      rowIndex = i;
    }
  }
  return [rowIndex, maxOne];
};
