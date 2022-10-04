(function stringExtension() {
  String.prototype.ensureStart = function (str) {
    if (this.startsWith(str)) {
      return this.toString();
    }
    return str + this.toString();
  };

  String.prototype.ensureEnd = function (str) {
    if (this.endsWith(str)) {
      return this.toString();
    }
    return this.toString() + str;
  };

  String.prototype.isEmpty = function () {
    return this.length === 0;
  };

  String.prototype.truncate = function (n) {
    if (this.length <= n) {
      return this.toString();
    }

    if (n < 4) {
      return '.'.repeat(n);
    }

    const lastIndex = this.substring(0, n - 2).lastIndexOf(' ');

    return lastIndex
      ? this.substring(0, lastIndex) + '...'
      : this.substring(0, n - 3) + '...';
  };

  String.format = function (string, ...params) {
    while (params.length) {
      string = string.replace(/{\d+}/, params.shift());
    }
    return string;
  };
})();

let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox', 'quick', 'brown');
str = String.format('jumps {0} {1}', 'dog');
console.log(str);

// 'my string'       // 'my' already present
// 'hello my string'
// 'hello my string' // length is 15
// 'hello my...'     // length is 11
// 'hello...'
// 'h...'
// '..'

// 'The quick brown fox'

// 'jumps dog {1}'   // no parameter at 1