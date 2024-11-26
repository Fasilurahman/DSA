class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Method to append a value at the end of the linked list
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Method to print the linked list
    printList() {
        let current = this.head;
        while (current) {
            console.log(current.value)
            current = current.next;
        }
    }
}

// Function to convert an array to a linked list
function arrayToLinkedList(arr) {
    const list = new LinkedList();
    for (let value of arr) {
        list.append(value);
    }
    return list;
}

// Example usage
const arr = [1, 2, 3, 4, 5];
const linkedList = arrayToLinkedList(arr);

console.log("Linked list created from array:");
linkedList.printList();
