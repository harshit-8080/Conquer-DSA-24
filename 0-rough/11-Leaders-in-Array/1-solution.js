//* https://www.enjoyalgorithms.com/blog/leaders-in-an-array

// * Leader Element -> Strictly greater than all elements to its right side

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
