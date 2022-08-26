function extractIncreasingSubsequenceFromArray(numbers) {
  return numbers
    .reduce((acc, number) => {
      if (number >= acc[acc.length - 1] || acc.length === 0) {
        acc.push(number);
      }

      return acc;
    }, []);
}

// second solution

/* function extractIncreasingSubsequenceFromArray(numbers) {
  let biggestNumber = numbers.shift();
  const result = [biggestNumber];

  for (const number of numbers) {
    if (number >= biggestNumber) {
      biggestNumber = number;
      result.push(number);
    }
  }

  return result;
} */

console.log(extractIncreasingSubsequenceFromArray([1,
  3,
  8,
  4,
  10,
  12,
  3,
  2,
  24]));
console.log(extractIncreasingSubsequenceFromArray([1,
  2,
  3,
  4]));
console.log(extractIncreasingSubsequenceFromArray([20,
  3,
  2,
  15,
  6,
  1]));