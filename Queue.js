// Queue
//FIFO Principle of queue

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

