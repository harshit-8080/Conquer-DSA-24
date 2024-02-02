/*

BF Idea :->
----------------------------------------------------------------
1. First sort the both the array now iterate over the big array.

2. While iterating, keep on checking smaller array elements. Increment for common elements.

3. At the last check if counter of smaller elements reached to it's size.
   1. WHY -> To Check if all elements found in big array.
   2. If it's equal, then return true. Otherwise false.   

*/

function isSubset(a1, a2, n, m) {
  a1.sort((a, b) => a - b);
  a2.sort((a, b) => a - b);

  //! Here we should do binary search instead of going linearly
  let j = 0;
  for (let i = 0; i < n && j < m; i++) {
    if (a1[i] == a2[j]) {
      j++;
    }
  }

  if (j == m) {
    return true;
  }
  return false;
}
