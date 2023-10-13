// Queue
// FIFO Principle of queue
// first in first out

//There are three types of queues known as circular, double-ended (dequeue) , and priority.

// enqueue: add element to end of queue
// dequeue: remove element from start of queue
// isEmpty: check if queue is empty or not
// front: value of element at start of queue
// size: return total number of element in queue
// print/display: print all elements in queue

class Queue {
  constructor() {
    this.items = [];
  }

  //enqueue
  enqueue(element) {
    this.items.push(element);
  }

  //dequeue
  dequeue() {
    if (this.isEmpty()) {
      return "queue is empty";
    }
    return this.items.shift();
  }

  //isempty
  isEmpty() {
    return this.items.length === 0;
  }

  //front
  front() {
    if (this.isEmpty()) {
      return "queue is empty";
    }
    return this.items[0];
  }

  //size
  size() {
    return this.items.length;
  }

  //print queue
  print() {
    if (this.isEmpty()) return "queue is empty";
    let queue = "";
    for (let i = 0; i < this.size(); i++) {
      queue = queue + this.items[i] + " ";
    }
    return queue;
    // return this.items.join(" ");
  }
}

const queueOne = new Queue();
queueOne.enqueue(10);
queueOne.enqueue(20);
queueOne.enqueue(30);
queueOne.enqueue(40);

console.log(queueOne.size());

queueOne.dequeue();
queueOne.dequeue();

console.log(queueOne.print());

// Circular Queue Implementation
// A Circular Queue is an extended version of a normal queue where the last element of the queue is connected to the first element of the queue forming a circle.
class circularQueue {
  constructor(k) {
    this.queue = [];
    this.size = k;
  }

  enqueue(element) {
    if (this.size === this.queue.length) return false;
    this.queue.push(element);
    return true;
  }

  dequeue() {
    if (this.queue.length === 0) return false;
    this.queue.shift();
    return true;
  }

  front() {
    if (this.queue.length === 0) return -1;
    return this.queue[0];
  }

  rear() {
    if (this.queue.length === 0) return -1;
    return this.queue[this.queue.length - 1];
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  isFull() {
    return (this.size = this.queue.length);
  }

  print() {
    if (this.queue.length === 0) return "queue is empty";
    return this.queue.join(" ");
  }
}

const circle = new circularQueue(5);
circle.enqueue(10);
circle.enqueue(50);
circle.enqueue(30);
circle.enqueue(20);
circle.enqueue(60);

console.log(circle.print());

// deque : similar to normal queue but elements can be added or removed from both ends

class Deque {
  constructor() {
    this.deque = [];
  }

  addFront(element) {
    this.deque.unshift(element);
  }

  addRear(element) {
    this.deque.push(element);
  }

  removeFront() {
    if (this.isEmpty()) return "deque is empty";
    return this.deque.pop();
  }

  removeRear() {
    if (this.isEmpty()) return "deque is empty";
    return this.deque.shift();
  }

  front() {
    if (this.isEmpty()) return "deque is empty";
    return this.deque[0];
  }

  rear() {
    if (this.isEmpty()) return "deque is empty";
    return this.deque[this.deque.length - 1];
  }

  size() {
    return this.deque.length;
  }

  isEmpty() {
    return this.deque.length === 0;
  }

  print() {
    if (this.isEmpty()) return "deque is empty";
    return this.deque.join(" ");
  }
}

const dequeue = new Deque();
dequeue.addFront(10);
dequeue.addFront(20);
dequeue.addFront(5);
dequeue.addRear(30);
dequeue.addRear(40);
dequeue.addRear(50);
dequeue.addRear(60);

dequeue.removeFront();
dequeue.removeRear();

console.log(dequeue.size());
console.log(dequeue.isEmpty());
console.log(dequeue.front());
console.log(dequeue.rear());

console.log(dequeue.print());
