function greatestCommonDivisor(numOne, numTwo) {
  if (numTwo) {
    greatestCommonDivisor(numTwo, numOne % numTwo);
  } else {
    console.log(numOne);
  }
}

greatestCommonDivisor(15, 5);
greatestCommonDivisor(2154, 458);