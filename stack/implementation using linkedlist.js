class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.top = null; 
    }
    push(value) {
        let newNode = new Node(value);
        newNode.next = this.top; 
        this.top = newNode;     
    }
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        let removedNode = this.top;  // Save the current top node
        this.top = this.top.next;    // Update top to the next node
        return removedNode.value;
    }
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.top.value;
    }
    isEmpty() {
        return this.top === null;
    }
}
const stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.peek()); // Output: 20
stack.pop();
console.log(stack.peek()); // Output: 10
