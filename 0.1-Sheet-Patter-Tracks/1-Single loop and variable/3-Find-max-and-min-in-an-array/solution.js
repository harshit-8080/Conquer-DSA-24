// * https://www.enjoyalgorithms.com/blog/find-the-minimum-and-maximum-value-in-an-array
// * https://www.geeksforgeeks.org/problems/max-min/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=bottom_sticky_on_article

function indSum(arr, n) {
  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i = i + 2) {
    if (arr[i] > arr[i + 1]) {
      if (arr[i] > max) {
        max = arr[i];
      }
      if (arr[i + 1] < min) {
        min = arr[i + 1];
      }
    } else {
      if (arr[i + 1] > max) {
        max = arr[i + 1];
      }
      if (arr[i] < min) {
        min = arr[i];
      }
    }
  }

  return min + max;
}
