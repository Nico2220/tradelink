"use strict";
class TrieNode {
    constructor() {
        this.children = {};
        this.endOfWord = false;
    }
}
class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    // O(w)- w length of the word
    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!(char in node.children)) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.endOfWord = true;
        return this;
    }
    // O(w) - where w is the length of word
    searchWord(word) {
        let node = this.root;
        for (const char of word) {
            if (!(char in node.children)) {
                return false;
            }
            node = node.children[char];
        }
        return node.endOfWord;
    }
    // O(w^2)
    searchConcatenations(query) {
        const result = [];
        for (let i = 1; i < query.length; i++) {
            let prefix = query.slice(0, i);
            let suffix = query.slice(i);
            if (this.searchWord(prefix) && this.searchWord(suffix)) {
                result.push(`${prefix}:${suffix}`);
            }
        }
        return result;
    }
}
// O(N*W +  KS^2)
// where N is the vocabulary length
// W - length of a single word
// K - length of queries
// S- length of query string
function findConcatanations(N, vocabulary, K, queries) {
    const trie = new Trie();
    for (const word of vocabulary) {
        trie.insert(word);
    }
    const results = [];
    for (const query of queries) {
        const concatOptions = trie.searchConcatenations(query);
        results.push(concatOptions.length, concatOptions);
    }
    return results;
}
const vocabulary = ["abcd", "cdef", "ab", "ef", "ffff"];
const queries = ["abcdef", "ffff"];
const r3 = findConcatanations(5, vocabulary, 2, queries);
console.log(r3);
