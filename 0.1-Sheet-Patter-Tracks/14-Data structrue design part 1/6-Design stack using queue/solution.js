class QueueDesign {
  constructor(maxQueueSize) {
    this.maxQueueSize = maxQueueSize;
    this.queue = [];
    this.front = -1;
    this.rear = -1;
    this.size = 0;
  }

  enqueue(element) {
    if (this.front === -1 && this.rear === -1) {
      this.front++;
      this.rear++;
      this.queue[this.rear] = element;
    } else {
      this.rear = (this.rear + 1) % this.maxQueueSize;
      this.queue[this.rear] = element;
    }
  }

  dequeue() {
    const dequeuElement = this.queue[this.front];
    if (this.front === this.rear) {
      this.queue[this.front] = null;
      this.front = -1;
      this.rear = -1;
    } else {
      this.queue[this.front] = null;
      this.front = (this.front + 1) % this.maxQueueSize;
    }
    return dequeuElement;
  }
}

class StackUsingQueue {
  constructor(maxStackSize) {
    this.maxStackSize = maxStackSize;
    this.size = 0;
    this.queue1 = new QueueDesign(this.maxStackSize);
    this.queue2 = new QueueDesign(this.maxStackSize);
  }

  pushToStack(element) {
    if (!this.isStackOverflow()) {
      this.queue1.enqueue(element);
      this.size = this.size + 1;

      console.log(`${element} is pushed to stack`);
      console.log(this.queue1.queue);
    }

    return "stack overflow error";
  }

  popFromStack() {
    if (!this.isStackEmpty()) {
      const poppedElement = this.peakOfStack();
      for (let i = 0; i < this.size - 1; i++) {
        const dequeuElement = this.queue1.dequeue();
        this.queue2.enqueue(dequeuElement);
      }

      this.queue1.dequeue();
      this.size--;

      for (let i = 0; i < this.size; i++) {
        const dequeuElement = this.queue2.dequeue();
        this.queue1.enqueue(dequeuElement);
      }

      console.log(`${poppedElement} is popped from stack`);
      console.log(this.queue1.queue);
      return poppedElement;
    }

    return "stack is empty";
  }

  peakOfStack() {
    if (!this.isStackEmpty()) {
      const peakElement = this.queue1.queue[this.queue1.rear];

      console.log(`${peakElement} is peak from stack`);
      return peakElement;
    }

    return "stack is empty";
  }
  sizeOfStack() {
    const size = this.size;
    console.log(`${size} is current size of stack`);
    return size;
  }

  isStackEmpty() {
    let size = this.sizeOfStack();
    if (size == 0) {
      console.log("Yes, Stack is empty");
      return true;
    }

    console.log("No, Stack is not empty");
    return false;
  }

  isStackOverflow() {
    let size = this.sizeOfStack();
    if (size == this.maxStackSize) {
      console.log("Yes, Stack is overflow");
      return true;
    }

    console.log("No, Stack is not overflow");
    return false;
  }
}

const stack = new StackUsingQueue(5);

stack.pushToStack(5);

console.log("===================================");

stack.pushToStack(10);

console.log("===================================");

stack.pushToStack(15);

console.log("===================================");

stack.peakOfStack();

console.log("===================================");

stack.pushToStack(20);

console.log("===================================");

stack.peakOfStack();

console.log("===================================");

stack.pushToStack(21);

console.log("===================================");

stack.popFromStack();

console.log("===================================");

stack.popFromStack();

console.log("===================================");

stack.pushToStack(22);

console.log("===================================");

stack.pushToStack(23);

console.log("===================================");

stack.pushToStack(24);

console.log("===================================");

stack.popFromStack();

console.log("===================================");

stack.pushToStack(24);

console.log("===================================");

stack.sizeOfStack();

console.log("===================================");

stack.peakOfStack();
