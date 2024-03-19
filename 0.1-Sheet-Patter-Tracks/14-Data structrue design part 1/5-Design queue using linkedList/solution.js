class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class QueueDesign {
  constructor() {
    this.maxQueueSize = 5;
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  enqueue(element) {
    if (this.isQueueFull()) {
      return;
    }

    const newNode = new Node(element);
    if (this.front === null && this.rear === null) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = this.rear.next;
    }
    this.size = this.size + 1;
  }

  dequeue() {
    if (this.isQueueEmpty()) {
      return;
    }

    if (this.front === this.rear) {
      this.front = null;
      this.rear = null;
    } else {
      this.front = this.front.next;
    }

    this.size = this.size - 1;
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

  printQueue() {
    let tempfront = this.front;

    while (tempfront != null) {
      console.log(tempfront.data);
      tempfront = tempfront.next;
    }

    console.log("==========");
  }
}

const queue = new QueueDesign();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

queue.printQueue();

queue.enqueue(6);

console.log("Size of queue:", queue.sizeOfQueue());

queue.dequeue();
queue.dequeue();

console.log("Size of queue after dequeue:", queue.sizeOfQueue());

queue.printQueue();

queue.enqueue(60);
queue.enqueue(70);

queue.dequeue();

queue.enqueue(80);

queue.printQueue();
