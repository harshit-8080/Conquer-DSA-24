/**
 
1. Last is always a leader. So

2. Start from second last element and go till first element.

3. Keep Comparing a[i] with leadersArray[0].

4. If a[i] > leadersArray[0]. Include a[i] as leader and store it in leadersArray.

*/

function leaders(arr, n) {
  let output = [];
  output.push(arr[n - 1]);

  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] > output[0]) {
      output.unshift(arr[i]);
    }
  }

  return output;
}
