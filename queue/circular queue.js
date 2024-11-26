class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class CircularQueue {
    constructor() {
        this.front = null;
        this.rear = null;
    }
    enqueue(value) {
        const newNode = new Node(value);
        if (!this.front) {
            this.front = this.rear = newNode;
            this.rear.next = this.front; // Make it circular
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
            this.rear.next = this.front; // Maintain circular link
        }
    }
    dequeue() {
        if (!this.front) {
            return "Queue is empty";
        }
        let removedValue = this.front.value;
        if (this.front === this.rear) {
            this.front = this.rear = null;
        } else {
            this.front = this.front.next;
            this.rear.next = this.front;
        }
        return removedValue;
    }
    peek() {
        return this.front ? this.front.value : "Queue is empty";
    }
    isEmpty() {
        return this.front === null;
    }
}
const queue = new CircularQueue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.peek());      
console.log(queue.dequeue());   // Output: 10
console.log(queue.peek());      // Output: 20
queue.enqueue(40);
console.log(queue.peek());      // Output: 20
