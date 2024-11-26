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

    dfs(start) {
        const visited = new Set(); // To keep track of visited nodes
        const result = []; // To store the traversal order

        const dfsRecursive = (vertex) => {
            if (!vertex) return; // Base case
            visited.add(vertex); // Mark the current vertex as visited
            result.push(vertex); // Process the vertex
            for (let neighbor of this.adjacencyList[vertex]) {
                if (!visited.has(neighbor)) {
                    dfsRecursive(neighbor); // Visit unvisited neighbors
                }
            }
        };

        dfsRecursive(start); // Start DFS from the given vertex
        return result;
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

console.log("DFS Traversal:", graph.dfs('A'));
// Output: DFS Traversal: [ 'A', 'B', 'C' ]



// function dfs(graph, startNode, visited = new Set()) {
//     visited.add(startNode);
//     console.log(startNode);

//     for (const neighbor of graph[startNode]) {
//         if (!visited.has(neighbor)) {
//             dfs(graph, neighbor, visited);
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

// dfs(graph, 'A');