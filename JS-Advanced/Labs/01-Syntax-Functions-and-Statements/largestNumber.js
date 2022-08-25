function largestNumber(numOne, numTwo, numThree) {
  console.log(`The largest number is ${Math.max(numOne, numTwo, numThree)}.`);
}

largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);

// one line for Judge
/* (...p) => `The largest number is ${Math.max(...p)}.`; */ 