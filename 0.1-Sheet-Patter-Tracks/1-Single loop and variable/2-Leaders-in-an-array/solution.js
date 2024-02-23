// * https://www.enjoyalgorithms.com/blog/leaders-in-an-array
// * https://www.geeksforgeeks.org/problems/leaders-in-an-array-1587115620/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=bottom_sticky_on_article

//Function to find the leaders in the array.
function leaders(arr, n) {
  let leader = [];
  leader.push(arr[n - 1]);

  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] >= leader[0]) {
      leader.unshift(arr[i]);
    }
  }

  return leader;
}
