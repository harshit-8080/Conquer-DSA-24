function sortStackUsing(orignalStack) {
  const outputStack = [];
  const temStack = [];

  for (let i = 0; i < orignalStack.length; i++) {
    const element = orignalStack[i];

    if (outputStack.length == 0) {
      outputStack.push(element);
    } else {
      let topElement = outputStack[outputStack.length - 1];

      if (topElement > element) {
        let flag = true;
        while (flag && outputStack.length != 0) {
          let topElement = outputStack[outputStack.length - 1];
          if (topElement > element) {
            let popElement = outputStack.pop();
            temStack.push(popElement);
          } else {
            flag = false;
          }
        }

        outputStack.push(element);
        while (temStack.length != 0) {
          let popElement = temStack.pop();
          outputStack.push(popElement);
        }
      } else {
        outputStack.push(element);
      }
    }
  }

  return outputStack.reverse();
}
