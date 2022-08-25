function mathOperations(numOne, numTwo, operator) {
  const operators = {
    '+': (numOne, numTwo) => numOne + numTwo,
    '-': (numOne, numTwo) => numOne - numTwo,
    '*': (numOne, numTwo) => numOne * numTwo,
    '/': (numOne, numTwo) => numOne / numTwo,
    '%': (numOne, numTwo) => numOne % numTwo,
    '**': (numOne, numTwo) => numOne ** numTwo
  };

  const result = operators[operator](numOne, numTwo);
  console.log(result);
}

mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');