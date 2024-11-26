// Graph Representation

// 1.Adjacency Matrix:

// A -- B
// |    |
// C -- D

// Adjacency Matrix:
//   A B C D
// A 0 1 1 0
// B 1 0 0 1
// C 1 0 0 1
// D 0 1 1 0

/////////***********************************///////////////


// 2.Adjacency List:

// Adjacency List:
// A: [B, C]
// B: [A, D]
// C: [A, D]
// D: [B, C]

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1); // Omit this line for directed graph
    }

    display() {
        console.log(this.adjacencyList);
    }
}

// Create a graph
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');

graph.display();
// Output: { A: [ 'B', 'C' ], B: [ 'A', 'C' ], C: [ 'A', 'B' ] }
