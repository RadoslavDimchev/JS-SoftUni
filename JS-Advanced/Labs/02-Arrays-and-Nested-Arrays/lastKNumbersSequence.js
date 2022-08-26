function lastKNumbersSequence(n, k) {
  const numbers = [1];

  generateNumber(numbers, n, k);

  return numbers;

  function generateNumber(numbers, n, k) {
    if (numbers.length < n) {
      const sum = numbers
        .slice(-k)
        .reduce((a, b) => a + b, 0);

      numbers.push(sum);

      generateNumber(numbers, n, k);
    }
  }
}

console.log(lastKNumbersSequence(6, 3));
console.log(lastKNumbersSequence(8, 2));