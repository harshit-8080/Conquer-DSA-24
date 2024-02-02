/*

BF Idea :-
------------------------------------------------------------------------------------------------
Iterate through the array and look for maxm area

*/

var maxArea = function (height) {
  area = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = 0; j < height.length; j++) {
      currArea = (j - i) * Math.min(height[i], height[j]);
      if (currArea > area) {
        area = currArea;
      }
    }
  }

  return area;
};
