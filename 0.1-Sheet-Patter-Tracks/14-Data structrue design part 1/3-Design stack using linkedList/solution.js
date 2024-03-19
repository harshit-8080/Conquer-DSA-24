class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class StackDesign {
  constructor() {
    this.head = null;
    this.size = 0;
    this.maxStackSize = 5;
  }

  pushToStack(data) {
    if (this.isStackOverflow()) {
      return;
    }

    const newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.size = this.size + 1;
  }

  printStack() {
    let tempHead = this.head;
    while (tempHead != null) {
      console.log("--> ", tempHead.data);
      tempHead = tempHead.next;
    }
  }

  popFromStack() {
    if (this.isStackEmpty()) {
      return;
    }

    console.log("Pop from stack -> ", this.head.data);
    this.head = this.head.next;
  }

  peakOfStack() {
    console.log("Peak of stack -> ", this.head.data);
    return this.head.data;
  }

  sizeOfStack() {
    return this.size;
  }

  isStackEmpty() {
    if (this.size == 0) {
      console.log("stack is empty");
      return true;
    }
    return false;
  }

  isStackOverflow() {
    if (this.size == this.maxStackSize) {
      console.log("max stack size exceeded");
      return true;
    }
    return false;
  }
}

const stack = new StackDesign();

stack.pushToStack(5);
stack.pushToStack(10);
stack.pushToStack(15);

stack.peakOfStack();

stack.pushToStack(20);

stack.peakOfStack();

stack.pushToStack(21);

stack.printStack();

stack.popFromStack();
stack.popFromStack();

stack.printStack();
