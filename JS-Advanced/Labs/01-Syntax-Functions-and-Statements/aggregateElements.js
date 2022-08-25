function aggregateElements(arr) {
  const sum = arr.reduce((a, b) => a + b, 0);

  let inverseSum = 0;
  arr.forEach(num => inverseSum += 1 / num);

  const concat = arr.join('');

  console.log(sum);
  console.log(inverseSum);
  console.log(concat);
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);