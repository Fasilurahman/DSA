class StackUsingQueue {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }
    push(element) {
        this.queue2.push(element);
        while (this.queue1.length > 0) {
            this.queue2.push(this.queue1.shift());
        }
        [this.queue1, this.queue2] = [this.queue2, this.queue1];
    }
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.queue1.shift();
    }
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.queue1[0];
    }
    isEmpty() {
        return this.queue1.length === 0;
    }
    size() {
        return this.queue1.length;
    }
}
const stack = new StackUsingQueue();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek());   
console.log(stack.pop());       
console.log(stack.peek()); 
console.log(stack.isEmpty());   
stack.pop();
stack.pop();
console.log(stack.isEmpty()); 
