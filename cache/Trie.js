const { calculateScore } =  require('../ranking/scoring');

class TrieNode {
    arr;
    map;
    constructor() {
        this.arr = new Array(26).fill(null);
        for (let i = 0; i < 26; i++) {
            this.arr.push(null);
        }
        this.map = new Map();
    }
    addToSet (id, score) {
        if(score > 0)  // make searchable only if score > 0
            this.map.set(id, score);
    }
    getIds () {
        return Array.from(this.map);
    }
}
 
class Trie {
    root;
    REFERENCE_CHAR = 'a';
    constructor() {
        this.root = new TrieNode();
    }
 
    // Inserts a word into the trie.
    insert(word, id, pos) {
        word = word.toLocaleLowerCase();

        let node = this.root;

        for(let i=0; i<word.length; i++){
            const c = word[i];
            const index = this.getIndex(c);
            if(node.arr[index] == null){
                const temp = new TrieNode();
                node.arr[index]=temp;
                node = temp;
            }else{
                node = node.arr[index];
            }
            node.addToSet(id, calculateScore(word, pos, i+1));
        }
    }
 
    // Returns if there is any word in the trie
    // that starts with the given prefix.
    startsWith(prefix) {
        const node = this.searchNode(prefix);
        if(node == null){
            return [];
        }else{
            return node.getIds();
        }
    }
 
    searchNode(s) {
        s = s.toLocaleLowerCase();
        let node = this.root;
        for(let i=0; i<s.length; i++){
            const c = s[i];
            const index = this.getIndex(c);
            if(node.arr[index]!=null){
                node = node.arr[index];
            }else{
                return null;
            }
        }
 
        if(node==this.root)
            return null;
 
        return node;
    }

    getIndex (a) {
        return a.charCodeAt(0) - this.REFERENCE_CHAR.charCodeAt(0);
    }
}

const instance = new Trie();
Object.freeze(instance);

module.exports = instance;