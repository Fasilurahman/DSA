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

    bfs(start) {
        const visited = new Set(); // To keep track of visited nodes
        const queue = [start]; // Start BFS with the starting vertex
        const result = []; // To store the order of traversal

        while (queue.length > 0) {
            const current = queue.shift(); // Dequeue the front element
            if (!visited.has(current)) {
                visited.add(current); // Mark as visited
                result.push(current); // Process the vertex
                queue.push(...this.adjacencyList[current].filter(neighbor => !visited.has(neighbor))); // Add unvisited neighbors
            }
        }

        return result; // BFS traversal order
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

console.log("BFS Traversal:", graph.bfs('A'));
// Output: BFS Traversal: [ 'A', 'B', 'C' ]



// function bfs(graph, startNode) {
//     const queue = [startNode];
//     const visited = new Set();
//     visited.add(startNode);

//     while (queue.length > 0) {
//         const currentNode = queue.shift();
//         console.log(currentNode);

//         for (const neighbor of graph[currentNode]) {
//             if (!visited.has(neighbor)) {
//                 visited.add(neighbor);
//                 queue.push(neighbor);
//             }
//         }
//     }
// }


// const graph = {
//     A: ['B', 'C'],
//     B: ['D', 'E'],
//     C: ['F'],
//     D: [],
//     E: ['F'],
//     F: []
// };

// bfs(graph, 'A');