// * https://leetcode.com/problems/find-the-highest-altitude/

var largestAltitude = function (gain) {
  let height = new Array(gain.length + 1).fill(0);

  let maxheight = 0;

  for (let i = 0; i < gain.length; i++) {
    let calculatedHeight = gain[i] + height[i];
    height[i + 1] = calculatedHeight;

    if (maxheight < calculatedHeight) {
      maxheight = calculatedHeight;
    }
  }

  return maxheight;
};
