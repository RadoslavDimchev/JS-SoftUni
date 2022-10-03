(function stringExtension() {
  String.prototype.ensureStart = function (str) {
    if (this.startsWith(str)) {
      return this + '';
    }
    return str + this;
  };

  String.prototype.ensureEnd = function (str) {
    if (this.endsWith(str)) {
      return this + '';
    }
    return this + str;
  };

  String.prototype.isEmpty = function () {
    return this.length === 0 ? true : false;
  };

  String.prototype.truncate = function (n) {
    if (this.length < n) {
      return this + '';
    }

    if (n < 4) {
      return '.'.repeat(n);
    }

    const parts = this.split(' ');
    if (parts.length === 1) {
      return parts.join('').split('.').join('').slice(0, n - 3) + '...';
    } else {
      let string = this + '';
      while (string.length > n) {
        parts.pop();
        string = parts.join(' ') + '...';
      };
      return string;
    }
  };

  String.format = function (string, ...params) {
    const pattern = /{\d+}/;
    while (params.length) {
      string = string.replace(pattern, params.shift());
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