(function arrayExtension() {
  Array.prototype.last = function () {
    return this[this.length - 1];
  };

  Array.prototype.skip = function (n) {
    const arr = [];
    for (let i = n; i < this.length; i++) {
      arr.push(this[i]);
    }
    return arr;
  };

  Array.prototype.take = function (n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(this[i]);
    }
    return arr;
  };

  Array.prototype.sum = function () {
    let arrSum = 0;
    for (const num of this) {
      arrSum += num;
    }
    return arrSum;
  };

  Array.prototype.average = function () {
    let arrSum = 0;
    for (const num of this) {
      arrSum += num;
    }
    return arrSum / this.length;
  };
})();

const myArr = [1, 2, 3];
console.log(myArr.last());     // 3
console.log(myArr.skip(1));    // [2, 3]
console.log(myArr.take(1));    // [1]
console.log(myArr.sum(1));     // 6
console.log(myArr.average(1)); // 2