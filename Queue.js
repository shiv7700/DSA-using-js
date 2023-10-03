// Queue
//FIFO Principle of queue

//front => starting part of queue
//rear => ending part of queue

//There are three types of queues known as circular, double-ended, and priority.

class Queue{
    constructor(){
        this.items = [];
    }

    //enqueue
    enqueue(element){
        this.items.push(element);
    }

    //dequeue
    dequeue(){
        if(this.isEmpty()){
            return "queue is empty";
        }
        return this.items.shift();
    }

    //isempty
    isEmpty(){
        return this.items.length===0
    }

    //front
    front(){
        if(this.isEmpty()){
            return "queue is empty";
        }
        return this.items[0];
    }

    //size
    size(){
        return this.items.length;
    }

    //print queue
    print(){
        console.log(this.items.join(" "));
    }
}

const inqueue = new Queue();
inqueue.enqueue(10);
inqueue.enqueue(20);
inqueue.enqueue(30);
inqueue.enqueue(40);

inqueue.dequeue();
inqueue.dequeue();


console.log(inqueue.print());

// Circular Queue Implementation 
// A Circular Queue is an extended version of a normal queue where the last element of the queue is connected to the first element of the queue forming a circle.
const CircularQueue = function(k){
    this.queue=[];
    this.size = k;
};

CircularQueue.prototype.enQueue = function(element){
    if(this.size=== this.queue.length) return false;
        this.queue.push(element)
        return true;
}

CircularQueue.prototype.deQueue = function(){
    if(this.queue.length === 0) return false;
    this.items.shift();
    return true;
} 

CircularQueue.prototype.front = function(){
    if(this.queue.length === 0) return -1;
    return this.queue[0];
}

CircularQueue.prototype.rear = function(){      
    if(this.queue.length === 0) return -1;
    return this.queue[this.queue.length-1];
}

