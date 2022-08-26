function sortingNumbers(numbers) {
  const sorted = [];

  numbers.sort((a, b) => a - b);

  while (numbers.length) {
    sorted.push(numbers.shift());

    if (numbers.length) {
      sorted.push(numbers.pop());
    }
  }

  return sorted;
}

console.log(sortingNumbers([1, 65, 3]));
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));