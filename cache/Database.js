class Database {
    arr;
    constructor() {
        this.arr = new Array();
    }

    save(input) {
        if(Array.isArray(input)) {
            this.arr.push(input);
            return this.arr.length-1;
        }
        return null;
    }
    getById(id) {
        if(Array.isArray(this.arr[id]))
            return [...this.arr[id]];
        else return null;
    }
}

const instance = new Database();
Object.freeze(instance);

module.exports = instance;