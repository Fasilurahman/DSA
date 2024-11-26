class MaxHeap {
  constructor() {
    this.heap = [];
  }
  leftChild(index) {
    return 2 * index + 1;
  }
  rightChild(index) {
    return 2 * index + 2;
  }
  parent(index) {
    return Math.floor((index - 1) / 2);
  }
  swap(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }
  heapifyDown(index) {
    let left = this.leftChild(index);
    let right = this.rightChild(index);
    let largest = index;
    if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
      largest = left;
    }
    if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
      largest = right;
    }
    if (largest !== index) {
      this.swap(index, largest);
      this.heapifyDown(largest);
    }
  }
  heapifyUp(index) {
    let parentIndex = this.parent(index);
    while (index > 0 && this.heap[index] > this.heap[parentIndex]) {
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = this.parent(index);
    }
  }
  insert(value) {
    this.heap.push(value); 
    this.heapifyUp(this.heap.length - 1);  
  }
  extractMax() {
    if (this.heap.length === 0) {
      return null;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const max = this.heap[0];
    this.heap[0] = this.heap.pop(); 
    this.heapifyDown(0);

    return max;
  }
  peek() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }
  printHeap() {
    console.log(this.heap);
  }
}

const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(20);
maxHeap.insert(5);
maxHeap.insert(15);
console.log("Heap after insertions:");
maxHeap.printHeap();  // Output: [ 20, 15, 5, 10 ]
console.log("Max element (peek):", maxHeap.peek());  
console.log("Extracted max element:", maxHeap.extractMax());  
console.log("Heap after extraction:");
maxHeap.printHeap(); 
console.log("Extracted max element:", maxHeap.extractMax());  // Output: 15
console.log("Heap after second extraction:");
maxHeap.printHeap();  // Output: [ 10, 5 ]
