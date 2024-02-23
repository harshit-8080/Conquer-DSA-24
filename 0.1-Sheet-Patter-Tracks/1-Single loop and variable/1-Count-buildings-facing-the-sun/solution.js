// * https://www.enjoyalgorithms.com/blog/number-of-buildings-facing-sun
// * https://www.geeksforgeeks.org/problems/buildings-receiving-sunlight3032/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=bottom_sticky_on_article

function Count_buildings_facing_the_sun(arr, n) {
  let maxHeight = arr[0];
  let result = 1;
  let i = 1;
  while (i < n) {
    if (arr[i] >= maxHeight) {
      result++;
      maxHeight = arr[i];
    }

    i++;
  }

  return result;
}
