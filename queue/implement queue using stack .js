class QueueUsingStack {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }
    enqueue(element) {
        this.stack1.push(element);
    }
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }
    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2[this.stack2.length - 1];
    }
    isEmpty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }
}

const queue = new QueueUsingStack();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.peek());       
console.log(queue.dequeue());    
console.log(queue.peek());       
console.log(queue.isEmpty()); 
queue.dequeue();
queue.dequeue();
console.log(queue.isEmpty()); 

