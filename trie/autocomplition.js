class TrieNode {
    constructor() {
        this.children = {}; // Stores child nodes
        this.isEndOfWord = false; // Marks the end of a word
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    searchPrefix(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                return null; // Return null if the prefix is not found
            }
            node = node.children[char];
        }
        return node; // Return the node where the prefix ends
    }

    collectAllWords(node, prefix, words) {
        if (node.isEndOfWord) {
            words.push(prefix); // Add word to the result list
        }
        for (let char in node.children) {
            this.collectAllWords(node.children[char], prefix + char, words);
        }
    }

    autocomplete(prefix) {
        const node = this.searchPrefix(prefix); // Find the node corresponding to the prefix
        if (!node) {
            return []; // If prefix is not found, return an empty list
        }
        const words = [];
        this.collectAllWords(node, prefix, words);
        return words; // Return all words that share the prefix
    }
}

// Example Usage
let trie = new Trie();
trie.insert("flower");
trie.insert("flow");
trie.insert("flight");
trie.insert("fluffy");

console.log(trie.searchPrefix("fl") !== null); // Output: true
console.log(trie.autocomplete("fl")); // Output: ["flower", "flow", "flight", "fluffy"]
console.log(trie.autocomplete("flo")); // Output: ["flower", "flow"]
console.log(trie.autocomplete("fluf")); // Output: ["fluffy"]
console.log(trie.autocomplete("xyz")); // Output: []
