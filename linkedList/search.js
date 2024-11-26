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

    // Method to append a new node at the end
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

    // Method to search for a value in the linked list
    search(value) {
        let current = this.head;
        let position = 0; // optional: track the position of the node
        while (current) {
            if (current.value === value) {
                return position; // returns the position where value is found
            }
            current = current.next;
            position++;
        }
        return -1; // return -1 if the value is not found
    }

    printList() {
        let current = this.head;
        let output = "";
        while (current) {
            output += current.value + " -> ";
            current = current.next;
        }
        console.log(output + "null");
    }
}

// Example usage:
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

console.log("Original List:");
list.printList();

let searchValue = 3;
let position = list.search(searchValue);
if (position !== -1) {
    console.log(searchValue);
} else {
    console.log(`not found`);
}
