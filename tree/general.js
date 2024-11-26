// Node class for a General Tree
class Node {
    constructor(value) {
        this.value = value; // Value of the node
        this.children = []; // Array to hold child nodes
    }
}

// General Tree class
class GeneralTree {
    constructor() {
        this.root = null; // Root of the tree
    }

    // Method to add a child to a specific parent node
    add(value, parentValue) {
        const newNode = new Node(value);

        // If tree is empty, set new node as root
        if (this.root === null) {
            this.root = newNode;
            return;
        }

        // Otherwise, find the parent and add the new node as its child
        const parent = this.find(this.root, parentValue);
        if (parent) {
            parent.children.push(newNode);
        } else {
            console.log(`Parent node with value ${parentValue} not found.`);
        }
    }

    // Helper method to find a node with a specific value
    find(node, value) {
        if (node === null) return null;
        if (node.value === value) return node;

        // Recursively search for the value in the children
        for (const child of node.children) {
            const found = this.find(child, value);
            if (found) return found;
        }
        return null;
    }

    // Depth-First Traversal
    depthFirstTraversal(node = this.root) {
        if (node === null) return;

        console.log(node.value); // Visit the node
        for (const child of node.children) {
            this.depthFirstTraversal(child); // Recur for each child
        }
    }

    // Breadth-First Traversal
    breadthFirstTraversal() {
        if (this.root === null) return;

        const queue = [this.root]; // Use a queue to manage nodes

        while (queue.length > 0) {
            const current = queue.shift(); // Dequeue the front node
            console.log(current.value); // Visit the node

            // Enqueue all children of the current node
            for (const child of current.children) {
                queue.push(child);
            }
        }
    }
}

// Example usage
const tree = new GeneralTree();

// Adding nodes
tree.add("Root"); // Adding root node
tree.add("Child 1", "Root");
tree.add("Child 2", "Root");
tree.add("Child 3", "Root");
tree.add("Grandchild 1", "Child 1");
tree.add("Grandchild 2", "Child 1");
tree.add("Grandchild 3", "Child 2");

console.log("Depth-First Traversal:");
tree.depthFirstTraversal();

console.log("Breadth-First Traversal:");
tree.breadthFirstTraversal();
