class BSTNode {
  constructor(value) {
    this.value = value; // Node's data
    this.left = null;   // Left child
    this.right = null;  // Right child
  }

  // Insert a new value
  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BSTNode(value);
      } else {
        this.left.insert(value);
      }
    } else if (value > this.value) {
      if (this.right === null) {
        this.right = new BSTNode(value);
      } else {
        this.right.insert(value);
      }
    }
  }

  // Check if the tree contains a value
  contains(value) {
    if (value === this.value) return true;
    if (value < this.value && this.left !== null) {
      return this.left.contains(value);
    } else if (value > this.value && this.right !== null) {
      return this.right.contains(value);
    }
    return false;
  }

  // Find the minimum value in the subtree
  findMin() {
    if (this.left === null) {
      return this.value;
    }
    return this.left.findMin();
  }

  // Delete a value from the tree
  delete(value) {
    if (value < this.value) {
      if (this.left) this.left = this.left.delete(value);
    } else if (value > this.value) {
      if (this.right) this.right = this.right.delete(value);
    } else {
      // Node to be deleted found
      if (!this.left && !this.right) {
        return null; // No children
      } else if (!this.left) {
        return this.right; // One child (right)
      } else if (!this.right) {
        return this.left; // One child (left)
      } else {
        // Two children: replace with the smallest value in the right subtree
        const minValue = this.right.findMin();
        this.value = minValue;
        this.right = this.right.delete(minValue);
      }
    }
    return this;
  }
}

// In-Order Traversal (Left -> Root -> Right)
function inOrderTraversal(node) {
    if (node) {
      inOrderTraversal(node.left);
      console.log(node.value);
      inOrderTraversal(node.right);
    }
  }
 
  // Pre-Order Traversal (Root -> Left -> Right)
  function preOrderTraversal(node) {
    if (node) {
      console.log(node.value);
      preOrderTraversal(node.left);
      preOrderTraversal(node.right);
    }
  }
  
  // Post-Order Traversal (Left -> Right -> Root)
  function postOrderTraversal(node) {
    if (node) {
      postOrderTraversal(node.left);
      postOrderTraversal(node.right);
      console.log(node.value);
    }
  }

  
  function findClosestValue(node, target, closest = Infinity) {
    if (node === null) return closest;
    if (Math.abs(target - closest) > Math.abs(target - node.value)) {
      closest = node.value;
    }
    if (target < node.value) {
      return findClosestValue(node.left, target, closest);
    } else if (target > node.value) {
      return findClosestValue(node.right, target, closest);
    }
    return closest;
  }

  
  function isValidBST(node, min = -Infinity, max = Infinity) {
    if (node === null) return true;
    if (node.value <= min || node.value >= max) return false;
    return (
      isValidBST(node.left, min, node.value) &&
      isValidBST(node.right, node.value, max)
    );
  }

  function secondlargest(node){
    if(!node || (!node.left && !node.right)){
        throw new Error("error")
    }
    while(node){
        if(node.right && !node.right.right && !node.right.left){
            return node.value
        }
        if(!node.right){
            return largest(node.left)
        }
        node = node.right
    }
}
function largest(node){
    while(node.right){
        node = node.right
    }
    return node.value
}

function findSecondSmallest(node) {
  if (!node || (!node.left && !node.right)) {
      throw new Error("Tree must have at least two nodes.");
  }
  let current = node;
  let parent = null;
  while (current.left) {
      parent = current;
      current = current.left;
  }
  if (current.right) {
      return findSmallest(current.right);
  }
  return parent.value;
}

function findSmallest(node) {
  let current = node;
  while (current.left) {
      current = current.left;
  }
  return current.value;
}

function areBSTsSame(tree1, tree2) {
  // If both nodes are null, they are the same
  if (tree1 === null && tree2 === null) {
    return true;
  }

  // If one node is null and the other isn't, they are not the same
  if (tree1 === null || tree2 === null) {
    return false;
  }

  // Check current node value and recursively check left and right subtrees
  return (
    tree1.value === tree2.value &&
    areBSTsSame(tree1.left, tree2.left) &&
    areBSTsSame(tree1.right, tree2.right)
  );
}

  
const tree1 = new BSTNode(10);
tree1.insert(5);
tree1.insert(15);
tree1.insert(2);
tree1.insert(7);

const tree2 = new BSTNode(10);
tree2.insert(5);
tree2.insert(15);
tree2.insert(2);
tree2.insert(7);

const tree3 = new BSTNode(10);
tree3.insert(5);
tree3.insert(15);
tree3.insert(3); // Different value compared to tree1 and tree2
tree3.insert(7);

console.log("In-Order Traversal:");
inOrderTraversal(tree1); // Output: 2, 5, 7, 10, 12, 15, 17
console.log("\nPre-Order Traversal:");
preOrderTraversal(tree1); // Output: 10, 5, 2, 7, 15, 12, 17
console.log("\nPost-Order Traversal:");
postOrderTraversal(tree1); // Output: 2, 7, 5, 12, 17, 15, 10
console.log("Second Largest:", secondlargest(tree1));
console.log("Second Smallest:", findSecondSmallest(tree1)); // Output: 5
console.log("\nContains 7:", tree1.contains(7)); // Output: true
console.log("Contains 20:", tree1.contains(20)); // Output: false
console.log("\nDelete Node with value 5:");
// tree1.delete(5);
inOrderTraversal(tree1); // Output: 2, 7, 10, 12, 15, 17
console.log("\nFind Closest Value to 14:", findClosestValue(tree1, 14)); // Output: 15
console.log("\nValidate if tree is BST:", isValidBST(tree1)); // Output: true
console.log("Tree1 and Tree2 are the same:", areBSTsSame(tree1, tree2)); // Output: true
console.log("Tree1 and Tree3 are the same:", areBSTsSame(tree1, tree3)); // Output: false


// 1.Insertion of nodes.
// 2.Checking if a value exists using contains.
// 3.Deleting a node.
// 4.Traversals (in-order, pre-order, post-order).
// 5.Finding the closest value to a given number.
// 6.Validating if the tree is a BST.


// class Node {
//   constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//   }
// }

// class BinarySearchTree {
//   constructor() {
//       this.root = null;
//   }

//   // Insert a new value into the BST
//   insert(value) {
//       const newNode = new Node(value);

//       if (!this.root) {
//           this.root = newNode;
//           return this;
//       }

//       let current = this.root;
//       while (true) {
//           if (value === current.value) return undefined; // No duplicates
//           if (value < current.value) {
//               if (!current.left) {
//                   current.left = newNode;
//                   return this;
//               }
//               current = current.left;
//           } else {
//               if (!current.right) {
//                   current.right = newNode;
//                   return this;
//               }
//               current = current.right;
//           }
//       }
//   }

//   // Search for a value in the BST
//   search(value) {
//       if (!this.root) return false;

//       let current = this.root;
//       while (current) {
//           if (value === current.value) return true;
//           if (value < current.value) {
//               current = current.left;
//           } else {
//               current = current.right;
//           }
//       }
//       return false;
//   }

//   // Inorder traversal (Left -> Root -> Right)
//   inorderTraversal(node = this.root, result = []) {
//       if (node) {
//           this.inorderTraversal(node.left, result);
//           result.push(node.value);
//           this.inorderTraversal(node.right, result);
//       }
//       return result;
//   }

//   // Preorder traversal (Root -> Left -> Right)
//   preorderTraversal(node = this.root, result = []) {
//       if (node) {
//           result.push(node.value);
//           this.preorderTraversal(node.left, result);
//           this.preorderTraversal(node.right, result);
//       }
//       return result;
//   }

//   // Postorder traversal (Left -> Right -> Root)
//   postorderTraversal(node = this.root, result = []) {
//       if (node) {
//           this.postorderTraversal(node.left, result);
//           this.postorderTraversal(node.right, result);
//           result.push(node.value);
//       }
//       return result;
//   }
// }

// // Usage Example
// const bst = new BinarySearchTree();

// // Insert values
// bst.insert(10);
// bst.insert(6);
// bst.insert(15);
// bst.insert(3);
// bst.insert(8);
// bst.insert(20);

// // Search for values
// console.log("Search 10:", bst.search(10)); // Output: true
// console.log("Search 99:", bst.search(99)); // Output: false

// // Traversals
// console.log("Inorder Traversal:", bst.inorderTraversal()); // [3, 6, 8, 10, 15, 20]
// console.log("Preorder Traversal:", bst.preorderTraversal()); // [10, 6, 3, 8, 15, 20]
// console.log("Postorder Traversal:", bst.postorderTraversal()); // [3, 8, 6, 20, 15, 10]
