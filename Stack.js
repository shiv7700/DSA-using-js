// Stack
//stack of plates at wedding
//LIFO Principle of Stack

// Enqueue: Add an element to the end of the queue
// Dequeue: Remove an element from the front of the queue
// IsEmpty: Check if the queue is empty
// IsFull: Check if the queue is full
// Peek: Get the value of the front of the queue without removing it

class Stack{
    constructor(){
        this.item = [];
    }

    //push element into stack
    push(element){
        this.item.push(element);
    }

    //pop element from stack
    pop(){
        if(this.item.length===0){
            return "stack is empty already"
        }
        return this.item.pop();
    }

    //isEmpty
    isEmpty(){
        return this.item.length=== 0 ;
    }

    //peek
    peek(){
        if(this.isEmpty()){
            return "stack is empty";
        }
        return this.item[this.item.length-1];
    }

    //size
    size(){
        return this.item.length;
    }

    //print whole stack
    print(){
        console.log(this.item.join(" "));
    }

}


