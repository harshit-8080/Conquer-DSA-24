class StackDesign {
  constructor(maxStackSize) {
    this.maxStackSize = maxStackSize;
    this.size = 0;
    this.stack = [];
  }

  pushToStack(element) {
    if (!this.isStackOverflow()) {
      this.stack.push(element);
      this.size = this.size + 1;
      return;
    }
  }

  popFromStack() {
    if (!this.isStackEmpty()) {
      const poppedElement = this.stack.pop();
      this.size = this.size - 1;
      return poppedElement;
    }
  }

  peakOfStack() {
    if (!this.isStackEmpty()) {
      return this.stack[this.size - 1];
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

class QueueDesign {
  constructor(maxQueueSize) {
    this.maxQueueSize = maxQueueSize;
    this.size = 0;
    this.stack1 = new StackDesign(maxQueueSize);
    this.stack2 = new StackDesign(maxQueueSize);
  }

  enqueue(element) {
    if (this.isQueueFull()) {
      return;
    }
    this.stack1.pushToStack(element);
    this.size = this.size + 1;
    console.log(
      `${element} is enqueue to queue and current size is ${this.size}`
    );
  }

  dequeue() {
    if (this.isQueueEmpty()) {
      return;
    }

    for (let i = 0; i < this.size - 1; i++) {
      const pop = this.stack1.popFromStack();
      this.stack2.pushToStack(pop);
    }

    const poppedElement = this.stack1.popFromStack();
    this.stack1.popFromStack();
    this.size = this.size - 1;

    for (let i = 0; i < this.size; i++) {
      const pop = this.stack2.popFromStack();
      this.stack1.pushToStack(pop);
    }

    console.log(
      `${poppedElement} dequeue from queue and current size is ${this.size}`
    );
  }

  sizeOfQueue() {
    return this.size;
  }

  isQueueEmpty() {
    let size = this.sizeOfQueue();
    if (size == 0) {
      console.log("Queue is empty");
      return true;
    }
    return false;
  }

  isQueueFull() {
    let size = this.sizeOfQueue();
    if (size == this.maxQueueSize) {
      console.log("Queue is full");
      return true;
    }
    return false;
  }
}

const queue = new QueueDesign();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

queue.enqueue(6);

queue.dequeue();
queue.dequeue();

queue.enqueue(60);

queue.enqueue(70);

queue.dequeue();

queue.enqueue(80);
