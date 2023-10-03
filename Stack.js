// Stack
//stack of plates at wedding
//LIFO Principle of Stack
//LIFO last in first out

// push: Add an element to the end of the queue
// pop: Remove an element from the end of the queue
// IsEmpty: Check if the queue is empty
// IsFull: Check if the queue is full
// Peek: Get the value of the front of the queue without removing it

// [1,2,3,4,5] 1 is rear , 5 is front

// Implementation of stack
// stack can be implemented through array or linklist 
// below is stack implementation using arrays


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
        return (this.item.length=== 0) ? true : false ;
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

const oneStack = new Stack();
oneStack.push(1);
oneStack.push(2);
oneStack.push(3);
oneStack.push(4);
oneStack.push(5);
oneStack.push(6);

oneStack.pop();
oneStack.pop();
oneStack.pop();
oneStack.pop();
oneStack.pop();
oneStack.pop();
console.log(oneStack.pop());

console.log(oneStack.isEmpty());

console.log(oneStack.size())

oneStack.print();


console.log(oneStack);

// Question 1 : reverse order of word in a string
// "hello world" => "world hello"
// "a good  example" => "example good a"
function reverseWord(str){
    const split = str.split(" ");
    const stack = [];
    for(let i of split){
        stack.push(i);
    }

    let finalStr = "";

    while(str.length){
        let current = stack.pop();
        if(current){
            finalStr += " " + current;
        }
    }
    return finalStr.trim();
}

const one = reverseWord("hello world");
console.log(one);

