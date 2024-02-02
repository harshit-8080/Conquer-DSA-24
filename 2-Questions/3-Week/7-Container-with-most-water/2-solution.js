/*

Two Pointer Idea :-
------------------------------------------------------------------------------------------------

1. Put two pointer one at start and another pointer at end.

2. Now Calculate the area like this :- (end - start) * Min(height[start], height[end])

3. Update your resultArea if it's smaaller than above calculated area.

4. Now move the pointer.
    1. Move start pointer right side if it's smaller.
    2. Otherwise move end pointer towards left side.

*/

var maxArea = function (height) {
  area = 0;
  let start = 0;
  let end = height.length;

  while (start < end) {
    currArea = (end - start) * Math.min(height[start], height[end]);
    if (area < currArea) {
      area = currArea;
    }

    if (height[start] < height[end]) {
      start++;
    } else {
      end--;
    }
  }

  return area;
};
