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

    // Method to append a new node to the end of the list
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    
    removeDuplicates() {
        if (!this.head) return; 

        let current = this.head;

        while (current && current.next) {
            if (current.value === current.next.value) {
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }
    }

    // Method to print the linked list
    printList() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            
            current = current.next;
        }
    }
}

// Example usage
const list = new LinkedList();
list.append(1);
list.append(1);
list.append(2);
list.append(3);
list.append(3);
list.append(4);
list.append(4);
list.append(4);
console.log("Original list:");
list.printList(); // Output: 1 -> 1 -> 2 -> 3 -> 3 -> 4 -> 4 -> 4 -> null

list.removeDuplicates(); // Remove duplicates
console.log("List after removing duplicates:");
list.printList(); // Output: 1 -> 2 -> 3 -> 4 -> null
