class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0; // To keep track of the size of the linked list
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
            current.next = newNode;
        }
        this.size++;
    }

    insertAfter(value, x) {
        let current = this.head;
        while (current) {
            if (current.value === x) {
                let newNode = new Node(value);
                newNode.next = current.next; // Set new node's next to current's next
                current.next = newNode; // Point current's next to the new node
                this.size++;
                return;
            }
            current = current.next; // Move to the next node
        }
        console.log(`Node with value ${x} not found.`);
    }

    insertBefore(value, x) {
        if (this.head === null) {
            console.log("List is empty.");
            return;
        }

        if (this.head.value === x) {
            // If x is the head, we need to insert before the head
            let newNode = new Node(value);
            newNode.next = this.head;
            this.head = newNode;
            this.size++;
            return;
        }

        let current = this.head;
        while (current.next) {
            if (current.next.value === x) {
                let newNode = new Node(value);
                newNode.next = current.next; // Link new node to current's next
                current.next = newNode; // Link current to new node
                this.size++;
                return;
            }
            current = current.next; // Move to the next node
        }
        console.log(`Node with value ${x} not found.`);
    }

    printList() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

// Example Usage
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);

console.log("Original List:");
list.printList();

// Insert after node with value 2
list.insertAfter(2.5, 2);
console.log("After Inserting 2.5 After 2:");
list.printList();

// Insert before node with value 3
list.insertBefore(2.75, 3);
console.log("After Inserting 2.75 Before 3:");
list.printList();
