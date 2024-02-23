// * https://www.enjoyalgorithms.com/blog/find-the-minimum-and-maximum-value-in-an-array
// * https://www.geeksforgeeks.org/problems/max-min/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=bottom_sticky_on_article

function findSum(arr, n) {
  let max = arr[0];
  let min = arr[0];

  let i = 1;

  while (i < n) {
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

    i++;
  }

  return min + max;
  //   return [max,min]
}
