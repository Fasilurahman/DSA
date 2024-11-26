class Queue {
    constructor() {
        this.items = []; 
    }
    enqueue(element) {
        this.items.push(element);
    }
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift();
    }
    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    // size() {
    //     return this.items.length;
    // }
}
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.peek());       // Output: 10
console.log(queue.dequeue());    // Output: 10
console.log(queue.peek());       // Output: 20
// console.log(queue.size());       // Output: 2
   // Output: false
