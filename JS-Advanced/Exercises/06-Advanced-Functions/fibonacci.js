function getFibonator() {
  return (function () {
    [this.curr, this.next] = [this.next, this.curr + this.next];

    return this.curr;
  }).bind({
    curr: 0,
    next: 1
  });
}

// second solution
/* function getFibonator() {
  let curr = 0;
  let next = 1;

  return function () {
    [curr, next] = [next, curr + next];

    return curr;
  }
} */

// third solution without destructuring
/* function getFibonator() {
  let curr = 0;
  let next = 1;

  return function () {
    const temp = curr + next;
    curr = next;
    next = temp;

    return curr;
  }
} */

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13