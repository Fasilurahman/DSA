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

    // Insert a word into the Trie
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

    // Search for a prefix in the Trie
    searchPrefix(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }

    // Check if a word exists in the Trie
    searchWord(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEndOfWord;
    }
}
let trie = new Trie();
trie.insert("flower");
trie.insert("flow");
trie.insert("flight");
console.log(trie.searchPrefix("fl")); // Output: true
console.log(trie.searchWord("flow")); // Output: true
console.log(trie.searchWord("fly"));  // Output: false
