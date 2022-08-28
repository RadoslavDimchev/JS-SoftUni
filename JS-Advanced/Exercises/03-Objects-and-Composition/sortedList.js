function createSortedList() {
  return {
    arr: [],
    add(element) {
      this.arr.push(element);
      this.arr.sort((a, b) => a - b);
    },
    remove(index) {
      if (index >= 0 && index < this.arr.length) {
        this.arr.splice(index, 1);
      }
    },
    get(index) {
      if (index >= 0 && index < this.arr.length) {
        return this.arr[index];
      }
    },
    get size() {
      return this.arr.length;
    }
  };
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));