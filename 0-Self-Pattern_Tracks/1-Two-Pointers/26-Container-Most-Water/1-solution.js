var maxArea = function (arr) {
  let maxArea = 0;
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let area = (end - start) * Math.min(arr[start], arr[end]);
    maxArea = Math.max(area, maxArea);

    if (arr[start] < arr[end]) {
      start++;
    } else {
      end--;
    }
  }

  return maxArea;
};
