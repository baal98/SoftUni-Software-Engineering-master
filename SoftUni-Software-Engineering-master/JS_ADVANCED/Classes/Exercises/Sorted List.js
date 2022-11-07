class List{
    constructor() {
        this.list = [];
        this.size = 0;
    }
    add(value) {
        this.list.push(value);
        this.list.sort((a, b) => a - b);
        this.size++;
    }
    remove(index) {
        if (index >= 0 && index < this.list.length) {
            this.list.splice(index, 1);
            this.size--;
        }
    }
    get(index) {
        if (index >= 0 && index < this.list.length) {
            return this.list[index];
        }
    }
}

const list = new List();
list.add(1);
list.remove(2);
list.add(12);
console.log(list.get(1));
