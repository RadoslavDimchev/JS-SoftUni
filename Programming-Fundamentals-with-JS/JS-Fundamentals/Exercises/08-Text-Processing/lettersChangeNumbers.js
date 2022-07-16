function lettersChangeNumbers(input = '') {
  const pattern = /([A-Za-z])(\d+)([A-Za-z])/g;
  const match = input.match(pattern);
  let totalSum = 0;

  const getAlphaPosition = (letter) => letter.toUpperCase().charCodeAt() - 64;

  for (const string of match) {
    const before = string.slice(0, 1);
    const after = string.slice(string.length - 1);
    const number = +string.slice(1, string.length - 1);
    let currSum = 0;

    if (before === before.toUpperCase()) {
      currSum += number / getAlphaPosition(before);
    } else {
      currSum += number * getAlphaPosition(before);
    }

    if (after === after.toUpperCase()) {
      currSum -= getAlphaPosition(after);

    } else {
      currSum += getAlphaPosition(after);

    }

    totalSum += currSum;
  }

  console.log(totalSum.toFixed(2));
}

lettersChangeNumbers('A12b s17G');
lettersChangeNumbers('P34562Z q2576f   H456z');
lettersChangeNumbers('a1A');