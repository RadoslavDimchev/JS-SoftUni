function sameNumbers(integer) {
  const integerAsString = String(integer);
  const firstChar = integerAsString[0];
  let isSame = true;
  let sum = Number(firstChar);

  for (let i = 1; i < integerAsString.length; i++) {
    const currentChar = integerAsString[i];
    sum += Number(currentChar);

    if (firstChar !== currentChar) {
      isSame = false;
    }
  }

  console.log(isSame);
  console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);