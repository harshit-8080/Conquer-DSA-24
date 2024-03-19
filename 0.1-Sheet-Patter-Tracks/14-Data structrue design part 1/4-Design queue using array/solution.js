class QueueDesign {
  constructor() {
    this.maxQueueSize = 5;
    this.queue = new Array(this.maxQueueSize).fill(null);
    this.front = -1;
    this.rear = -1;
    this.size = 0;
  }

  enqueue(element) {
    if (this.isQueueFull()) {
      return;
    }

    if (this.front === -1 && this.rear === -1) {
      this.front++;
      this.rear++;
      this.queue[this.rear] = element;
    } else {
      this.rear = (this.rear + 1) % this.maxQueueSize;
      this.queue[this.rear] = element;
    }
    this.size = this.size + 1;

    console.log("Front: " + this.front, " & Rear: " + this.rear);
  }

  dequeue() {
    if (this.isQueueEmpty()) {
      return;
    }

    if (this.front === this.rear) {
      this.queue[this.front] = null;
      this.front = -1;
      this.rear = -1;
    } else {
      this.queue[this.front] = null;
      this.front = (this.front + 1) % this.maxQueueSize;
    }

    this.size = this.size - 1;

    console.log("Front: " + this.front, " & Rear: " + this.rear);
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
    console.log(this.queue);
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
