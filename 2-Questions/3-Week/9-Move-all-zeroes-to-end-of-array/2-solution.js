/*

Two Pointer approach :-
----------------------------------------------------------------

1. create two pointer first at 0th index and second at 1st index

2. Now Check arr[start] is equal to 0
    1. Now check arr[end] is nonzero. If yes swap and increment both pointers
    2. Now arr[end] is zero and then keep incrementing end to find nonzero in array
    2. If any nonzero found from Step-2.2, Cool then do step 2.1

3.  If arr[start] is not equal to 0, increment both pointers

*/

function pushZerosToEnd(arr, n) {
  let start = 0;
  let end = start + 1;

  while (start < end && end < n) {
    if (arr[start] == 0) {
      if (arr[end] != 0) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end++;
      } else {
        end++;
      }
    } else {
      start++;
      end++;
    }
  }

  return arr;
}
