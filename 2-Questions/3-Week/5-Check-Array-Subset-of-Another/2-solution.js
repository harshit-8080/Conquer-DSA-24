/*

Using Maps 
----------------------------------------------------------------

1. Create map or object.

2 Iterate over big array and add key/value pairs.

3. Now Iterate over smaller array and check if element found as key in map or not.

4. Check for all elements. If all elements found return true otherwise return false.

*/

function isSubset(a1, a2, n, m) {
  let map = {};

  for (let i = 0; i < n; i++) {
    if (map[a1[i]]) {
      continue;
    } else {
      map[a1[i]] = a1[i];
    }
  }

  for (let i = 0; i < m; i++) {
    if (map[a2[i]]) {
      continue;
    } else {
      return "No";
    }
  }

  return "Yes";
}
