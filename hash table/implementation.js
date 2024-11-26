class HashTable {
    constructor(size = 53) {
        this.table = new Array(size)
    }
    hash(key) {
        let total = 0
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * 31 + value) % this.table.length
        }
        return total
    }
    set(key, value) {
        const index = this.hash(key)
        if (!this.table[index]) {
            this.table[index] = []
        }
        this.table[index].push([key, value])
    }
    get(key) {
        let index = this.hash(key)
        if (this.table[index]) {
            for (let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i][0] === key) {
                    return this.table[index][i][1];
                }
            }
        }
        return "No such data found"
    }
    remove(key){
        let index = this.hash(key)
        if(this.table[index]){
            for(let i=0;i< this.table[index].length;i++){
                if(this.table[index][i][0]===key){
                    this.table[index].splice(i,1)
                    return true
                }
            }
        }
        return false
    }
    print(){
        const keysArray = []
        for(let bucket of this.table){
            if(bucket){
                for(let [keys,value] of bucket){
                    keysArray.push([keys,value])
                }
            }
        }
        return keysArray
    }
    count(){
        let count = 0
        for(let bucket of this.table){
            if(bucket){
                for(let [keys,value] of bucket){
                    count++
                }
            }
        }
        return count
    }
}
const hashTable = new HashTable();
hashTable.set("name", "Alice");
hashTable.set("age", 25);
hashTable.set("city", "New York");
console.log(hashTable.get("name")); // Output: Alice
console.log(hashTable.get("age"));  // Output: 25
console.log(hashTable.get("city")); // Output: New York
console.log(hashTable.print());
console.log(hashTable.count());