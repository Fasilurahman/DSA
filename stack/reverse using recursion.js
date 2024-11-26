class Stack {
    constructor() {
        this.items = []; 
    }
    push(element) {
        this.items.push(element); 
    }
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
}
function insertAtBottom(stack, element) {
    if (stack.isEmpty()) {
        stack.push(element);
    } else {
        const top = stack.pop();
        insertAtBottom(stack, element);
        stack.push(top);
    }
}
function reverseStack(stack) {
    if (!stack.isEmpty()) {
        const top = stack.pop();
        reverseStack(stack);
        insertAtBottom(stack, top);
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
console.log("Original Stack (top to bottom):", stack.items);
reverseStack(stack);
console.log("Reversed Stack (top to bottom):", stack.items);
