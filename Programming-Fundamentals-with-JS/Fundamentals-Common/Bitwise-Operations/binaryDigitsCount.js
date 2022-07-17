function binaryDigitsCount(integer, binaryDigit) {
  // convert the integer into binary representation
  const integerToBinary = integer.toString(2);

  // count the binary digit in the binary number
  const pattern = new RegExp(binaryDigit, 'g');
  const match = integerToBinary.match(pattern);
  const result = match.length;

  // print the result on the console
  console.log(result);
}

binaryDigitsCount(20, 0); // 20 -> 10100 We have 3 zeroes.
binaryDigitsCount(15, 1); // 15 -> 1111 We have 4 ones.
binaryDigitsCount(10, 0); // 10 -> 1010 We have 2 zeroes.