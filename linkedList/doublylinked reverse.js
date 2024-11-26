class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    prepend(value) {
        let newNode = new Node(value);
        if (this.head) {
            this.head.prev = newNode;
        }
        newNode.next = this.head;
        this.head = newNode;
    }
    append(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;  
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;  
            }
            newNode.prev = current; 
            current.next = newNode;  
        }
    }
    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
    reverse() {
        let curr = this.head;
        let next = null;
        while (curr) {
            next = curr.prev; 
            curr.prev = curr.next; 
            curr.next = next;
            curr = curr.prev;
        }
        this.head = next.prev;  
    }
}

let list = new LinkedList();
list.prepend(0);
list.append(1);
list.append(2);
list.append(3);
console.log("Original List:");
list.print();
list.reverse();
console.log("Reversed List:");
list.print();
