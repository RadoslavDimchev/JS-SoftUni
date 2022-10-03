function extensibleObject() {
  const obj = {};

  obj.extend = function (otherObj) {
    for (const [key, value] of Object.entries(otherObj)) {
      if (typeof value === 'function') {
        Object.getPrototypeOf(obj)[key] = value;
      } else {
        obj[key] = value;
      }
    }
  };

  return obj;
}

const myObj = extensibleObject();

const template = {
  extensionMethod: function () { },
  extensionProperty: 'someString'
};

console.log(Object.getPrototypeOf(myObj));
console.log(myObj);

myObj.extend(template);

console.log(Object.getPrototypeOf(myObj));
console.log(myObj);

// myObj: {
//   __proto__: {}
//   extend: function () {…}
// }

// myObj: {
//   __proto__: {
//     extensionMethod: function () {}
//   },
//   extend: function () {},
//   extensionProperty: 'someString'
// }