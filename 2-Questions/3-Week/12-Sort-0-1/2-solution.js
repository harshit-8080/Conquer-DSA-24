/*

Two Pointer approach :-
----------------------------------------------------------------

1. Create two pointer first at 0th index and second at end

2. Now Check arr[start] is equal to 1
    1. Now check arr[end] is 0. If yes swap and increment both pointers
    2. Now arr[end] is 1 and then keep decrementing end to find 0 in array
    2. If any 0 found from Step-2.2, Cool then do step 2.1

3.  If arr[start] is not equal to 1, Increment start pointer

*/

function segregate0and1(arr, n) {
  let start = 0;
  let end = n - 1;

  while (start < end) {
    if (arr[start] == 1) {
      if (arr[end] == 0) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        end--;
        start++;
      } else {
        end--;
      }
    } else {
      start++;
    }
  }
}
