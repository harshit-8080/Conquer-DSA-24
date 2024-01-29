/*

Idea :-->
--------------------------------------------------------------------------------------------------------------------

1. Make an big size array (size = m+n)

2. Now put pointer at 0th index and arr1, arr2 and output array

3. Now keep comparing and push elements to output array.
    1. Push smaller element from arr1 and arr2.
    
*/

function mergeTwoSortedArrays(nums1, m, nums2, n) {
  output = new Array(m + n);

  let i = 0,
    j = 0,
    k = 0;

  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      output[k] = nums1[i];
      i++;
      k++;
    } else {
      output[k] = nums2[j];
      j++;
      k++;
    }
  }

  while (i < m) {
    output[k] = nums1[i];
    i++;
    k++;
  }
  while (j < n) {
    output[k] = nums2[j];
    j++;
    k++;
  }

  return output;
}
