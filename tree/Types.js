// Binary Tree :-
// A tree in which each node has at most two children, called the left child and right
//        A
//       / \
//      B   C
//     / \
//    D   E


// Binary Search Tree :-
// The left subtree contains nodes with values less than the parent.
// The right subtree contains nodes with values greater than the parent.
// 
//        8
//       / \
//      3   10
//     / \     \
//    1   6     14
//       / \
//      4   7



// Complete Binary Tree
// A binary tree where all levels are fully filled except possibly the last, which is filled from left to right.
// 
//        A
//       / \
//      B   C
//     / \  /
//    D  E F


// Full Binary Tree
// A binary tree where every node has either 0 or 2 children.
//        A
//       / \
//      B   C
//     / \
//    D   E



// Balanced Binary Tree
// A binary tree where the difference between the heights of the left and right subtrees of every node is at most 1.
//        A
//       / \
//      B   C
//     / \
//    D   E




// Perfect Binary Tree
// A binary tree where all internal nodes have 2 children, and all leaves are at the same level.

//        A
//       / \
//      B   C
//     / \ / \
//    D  E F  G



// Trie (Prefix Tree)
// A special tree used to store strings, where each node represents a single character of the string.
//      root
//      /   \
//     c     b
//    / \     \
//   a   a     a
//  /     \     \
// t       r     t


///////////////////// ************************************************************** /////////////////////////


// TREE IMPLEMENTATION

// class TreeNode {
//     constructor(value) {
//       this.value = value; // Node's data
//       this.children = []; // Array to store child nodes
//     }
  
//     // Add a child to the current node
//     addChild(childNode) {
//       this.children.push(childNode);
//     }
  
//     // Recursively print the tree
//     printTree(level = 0) {
//       console.log("  ".repeat(level) + this.value); // Indentation based on tree level
//       this.children.forEach(child => child.printTree(level + 1));
//     }
//   }
  
//   // Example Usage:
//   const root = new TreeNode("A"); // Root node
//   const child1 = new TreeNode("B");
//   const child2 = new TreeNode("C");
//   const child3 = new TreeNode("D");
  
//   // Building the tree
//   root.addChild(child1);
//   root.addChild(child2);
//   child1.addChild(child3);
  
//   // Print the tree structure
//   root.printTree();
  

///////////////////// ************************************************************** /////////////////////////

// BINARY TREE IMPLEMENTATION

// class BinaryTreeNode {
//     constructor(value) {
//       this.value = value; // Node's data
//       this.left = null;   // Left child
//       this.right = null;  // Right child
//     }
//   }
  
//   // Function to print in-order traversal (left -> root -> right)
//   function inOrderTraversal(node) {
//     if (node !== null) {
//       inOrderTraversal(node.left);
//       console.log(node.value);
//       inOrderTraversal(node.right);
//     }
//   }
  
//   // Example Usage:
//   const root = new BinaryTreeNode(10); // Root node
//   root.left = new BinaryTreeNode(5);   // Left child
//   root.right = new BinaryTreeNode(15); // Right child
//   root.left.left = new BinaryTreeNode(3); // Left of 5
//   root.left.right = new BinaryTreeNode(7); // Right of 5
  
//   console.log("In-Order Traversal:");
//   inOrderTraversal(root);
  


///////////////////// ************************************************************** /////////////////////////


// BINARY SEARCH TREE IMPLEMENTATION


// class BSTNode {
//     constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//     }
  
//     // Insert a new value into the tree
//     insert(newValue) {
//       if (newValue < this.value) {
//         if (this.left === null) {
//           this.left = new BSTNode(newValue);
//         } else {
//           this.left.insert(newValue);
//         }
//       } else if (newValue > this.value) {
//         if (this.right === null) {
//           this.right = new BSTNode(newValue);
//         } else {
//           this.right.insert(newValue);
//         }
//       }
//     }
  
//     // Search for a value in the tree
//     search(value) {
//       if (this.value === value) return true;
//       if (value < this.value && this.left !== null) {
//         return this.left.search(value);
//       } else if (value > this.value && this.right !== null) {
//         return this.right.search(value);
//       }
//       return false;
//     }
//   }
  
//   // Example Usage:
//   const bst = new BSTNode(10); // Root node
//   bst.insert(5);
//   bst.insert(15);
//   bst.insert(3);
//   bst.insert(7);
  
//   console.log("Search for 7:", bst.search(7)); // Output: true
//   console.log("Search for 20:", bst.search(20)); // Output: false
  

///////////////////// ************************************************************** /////////////////////////


// TRIES IMPLEMENTATION

// class TrieNode {
//     constructor() {
//       this.children = {}; // Stores child nodes
//       this.isEndOfWord = false; // Marks the end of a word
//     }
//   }
  
//   class Trie {
//     constructor() {
//       this.root = new TrieNode();
//     }
  
//     // Insert a word into the trie
//     insert(word) {
//       let node = this.root;
//       for (const char of word) {
//         if (!node.children[char]) {
//           node.children[char] = new TrieNode();
//         }
//         node = node.children[char];
//       }
//       node.isEndOfWord = true;
//     }
  
//     // Search for a word in the trie
//     search(word) {
//       let node = this.root;
//       for (const char of word) {
//         if (!node.children[char]) return false;
//         node = node.children[char];
//       }
//       return node.isEndOfWord;
//     }
//   }
  
//   // Example Usage:
//   const trie = new Trie();
//   trie.insert("cat");
//   trie.insert("car");
//   trie.insert("bat");
  
//   console.log("Search for 'cat':", trie.search("cat")); // Output: true
//   console.log("Search for 'can':", trie.search("can")); // Output: false
  


///////////////////// ************************************************************** /////////////////////////


// HEAP IMPLEMENTATION


// class MaxHeap {
//     constructor() {
//       this.heap = [];
//     }
  
//     // Insert a value into the heap
//     insert(value) {
//       this.heap.push(value);
//       this.bubbleUp();
//     }
  
//     // Ensure the heap property is maintained
//     bubbleUp() {
//       let index = this.heap.length - 1;
//       while (index > 0) {
//         const parentIndex = Math.floor((index - 1) / 2);
//         if (this.heap[parentIndex] >= this.heap[index]) break;
//         [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
//         index = parentIndex;
//       }
//     }
  
//     // Remove the maximum value (root)
//     extractMax() {
//       if (this.heap.length === 1) return this.heap.pop();
//       const max = this.heap[0];
//       this.heap[0] = this.heap.pop();
//       this.bubbleDown();
//       return max;
//     }
  
//     bubbleDown() {
//       let index = 0;
//       const length = this.heap.length;
//       while (true) {
//         const left = 2 * index + 1;
//         const right = 2 * index + 2;
//         let largest = index;
  
//         if (left < length && this.heap[left] > this.heap[largest]) largest = left;
//         if (right < length && this.heap[right] > this.heap[largest]) largest = right;
//         if (largest === index) break;
  
//         [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
//         index = largest;
//       }
//     }
//   }
  
//   // Example Usage:
//   const maxHeap = new MaxHeap();
//   maxHeap.insert(10);
//   maxHeap.insert(20);
//   maxHeap.insert(15);
  
//   console.log("Extract Max:", maxHeap.extractMax()); // Output: 20
  