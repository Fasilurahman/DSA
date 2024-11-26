class Node {
    constructor(value) {
        this.value = value; 
        this.left = null;   
        this.right = null;  
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null; 
    }

   
    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode; 
        } else {
            this._insertNode(this.root, newNode); 
        }
    }

    _insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode; 
            } else {
                this._insertNode(node.left, newNode); 
            }
        } else {
            if (node.right === null) {
                node.right = newNode; 
            } else {
                this._insertNode(node.right, newNode); 
            }
        }
    }

    // Search for a value in the tree
    search(value) {
        return this._searchNode(this.root, value);
    }

    _searchNode(node, value) {
        if (node === null) {
            return false; 
        }
        if (value === node.value) {
            return true; 
        } else if (value < node.value) {
            return this._searchNode(node.left, value); // Search left subtree
        } else {
            return this._searchNode(node.right, value); // Search right subtree
        }
    }

    // Traversals
    inorderTraversal() {
        this._inorder(this.root);
    }

    _inorder(node) {
        if (node !== null) {
            this._inorder(node.left); // Visit left subtree
            console.log(node.value);  // Visit node
            this._inorder(node.right); // Visit right subtree
        }
    }
}

const bst = new BinarySearchTree();

// Insert values
bst.insert(10);
bst.insert(5);
bst.insert(20);
bst.insert(8);
bst.insert(15);

// Search for values
console.log("Is 15 in the tree?", bst.search(15)); // Output: true
console.log("Is 25 in the tree?", bst.search(25)); // Output: false

console.log("Inorder Traversal:");
bst.inorderTraversal(); // Output: 5, 8, 10, 15, 20
