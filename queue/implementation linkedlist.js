class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    // Enqueue: Add to the end of the queue
    enqueue(value) {
        let newNode = new Node(value);
        if (this.isEmpty()) {
            this.front = this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++;
    }

    // Dequeue: Remove from the front of the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        let removedNode = this.front;
        this.front = this.front.next;
        if (!this.front) {
            this.rear = null;
        }
        this.size--;
        return removedNode.value;
    }

    // Peek: Look at the front item without removing it
    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.front.value;
    }

    // isEmpty: Check if the queue is empty
    isEmpty() {
        return this.size === 0;
    }
}

// Example usage
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.peek());     // Output: 10
console.log(queue.dequeue());  // Output: 10
console.log(queue.peek());     // Output: 20
