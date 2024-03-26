function nextLargerElement(arr, n) {
  let output = [];
  let stack = [];
  let element;
  for (let i = n - 1; i >= 0; i--) {
    element = arr[i];
    if (stack.length == 0) {
      output.push(-1);
      stack.push(element);
    } else {
      let flag = true;
      while (flag & (stack.length != 0)) {
        let topFromStack = stack[stack.length - 1];

        if (topFromStack > element) {
          output.push(topFromStack);
          stack.push(element);
          break;
        } else {
          stack.pop();
        }
      }

      if (stack.length == 0) {
        output.push(-1);
        stack.push(element);
      }
    }
  }

  return output.reverse();
}
