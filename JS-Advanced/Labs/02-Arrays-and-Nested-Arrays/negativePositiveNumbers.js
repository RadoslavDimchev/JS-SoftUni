function negativePositiveNumbers(numbers) {
  const result = [];

  for (const number of numbers) {
    number >= 0
      ? result.push(number)
      : result.unshift(number);
  }

  console.log(result.join('\n'));
}

negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);