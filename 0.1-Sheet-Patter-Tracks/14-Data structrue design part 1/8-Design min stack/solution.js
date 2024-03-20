class MinStack {
  constructor() {
    this.stack = [];
    this.size = 0;
  }

  pushMiniToStack(element) {
    if (this.stack.length) {
      const peakElement = this.peakOfStack();
      if (peakElement > element) {
        this.stack.push(element);
        this.size = this.size + 1;
      }
    } else {
      this.stack.push(element);
      this.size = this.size + 1;
    }
  }

  popMiniFromStack(poppedElement) {
    if (this.size == 0 || this.size == 1) {
      return;
    }
    while (this.size > 0) {
      if (this.peakOfStack() == poppedElement) {
        this.size = this.size - 1;
        this.stack.pop();
        break;
      }
      this.size = this.size - 1;
      this.stack.pop();
    }
  }

  peakOfStack() {
    return this.stack[this.stack.length - 1];
  }
}
class StackDesign {
  constructor(maxStackSize) {
    this.maxStackSize = maxStackSize;
    this.stack = [];
    this.minStack = new MinStack();
  }

  pushToStack(element) {
    if (!this.isStackOverflow()) {
      this.stack.push(element);

      this.minStack.pushMiniToStack(element);
      return `${element} is pushed to stack`;
    }

    return "stack overflow error";
  }

  popFromStack() {
    if (!this.isStackEmpty()) {
      const poppedElement = this.stack.pop();

      this.minStack.popMiniFromStack(poppedElement);
      return `${poppedElement} is popped from stack`;
    }

    return "stack is empty";
  }

  peakOfStack() {
    if (!this.isStackEmpty()) {
      return `Current Peak of stack = ${this.stack[this.stack.length - 1]}`;
    }

    return "stack is empty";
  }
  sizeOfStack() {
    return this.stack.length;
  }

  isStackEmpty() {
    let size = this.sizeOfStack();
    if (size == 0) {
      return true;
    }
    return false;
  }

  isStackOverflow() {
    let size = this.sizeOfStack();
    if (size == this.maxStackSize) {
      return true;
    }
    return false;
  }

  getMinimumFromStack() {
    console.log(`${this.minStack.peakOfStack()} is the minimum`);
  }
}

const stack = new StackDesign(10);

console.log(stack.pushToStack(4));
stack.getMinimumFromStack();

console.log("================================================");

console.log(stack.pushToStack(3));
stack.getMinimumFromStack();

console.log("================================================");

console.log(stack.pushToStack(3));
stack.getMinimumFromStack();

console.log("================================================");

console.log(stack.pushToStack(2));
stack.getMinimumFromStack();

console.log("================================================");

console.log(stack.pushToStack(3));
stack.getMinimumFromStack();
stack.popFromStack();
stack.popFromStack();

console.log("================================================");

console.log(stack.pushToStack(3));
stack.getMinimumFromStack();
stack.popFromStack();

console.log("================================================");

console.log(stack.pushToStack(1));
stack.getMinimumFromStack();

console.log("================================================");

stack.popFromStack();
stack.getMinimumFromStack();

console.log("================================================");

console.log(stack.pushToStack(5));
stack.getMinimumFromStack();

console.log("================================================");

console.log(stack.pushToStack(2));
stack.getMinimumFromStack();

console.log("================================================");

console.log(stack.pushToStack(12));
stack.getMinimumFromStack();
