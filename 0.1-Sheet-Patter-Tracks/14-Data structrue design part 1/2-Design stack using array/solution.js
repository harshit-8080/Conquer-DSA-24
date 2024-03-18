class StackDesign {
  constructor() {
    this.maxStackSize = 100;
    this.stack = [];
  }

  pushToStack(element) {
    if (!this.isStackOverflow()) {
      this.stack.push(element);
      return `${element} is pushed to stack`;
    }

    return "stack overflow error";
  }

  popFromStack() {
    if (!this.isStackEmpty()) {
      const poppedElement = this.stack.pop();
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
}

const stack = new StackDesign();

console.log(stack.pushToStack(5));
console.log(stack.pushToStack(10));

console.log("Size of Stack = ", stack.sizeOfStack());
console.log(stack.peakOfStack());

console.log(stack.popFromStack());
console.log(stack.popFromStack());

console.log("Size of Stack = ", stack.sizeOfStack());
console.log(stack.popFromStack());
