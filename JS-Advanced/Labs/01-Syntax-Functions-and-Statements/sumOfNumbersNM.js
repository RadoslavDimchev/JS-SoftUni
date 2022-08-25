function sumOfNumbersNM(n, m) {
  n = +n;
  m = +m;
  let sum = 0;

  for (let i = n; i <= m; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumOfNumbersNM('1', '5'));
console.log(sumOfNumbersNM('-8', '20'));