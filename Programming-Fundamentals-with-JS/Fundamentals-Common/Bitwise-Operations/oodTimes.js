function oodTimes(arrayOfIntegers) {
  // initialize a variable result with a value of 0
  let result = 0;

  // iterate through all numbers in the array
  // use XOR (^) of the result and all numbers in the array
  // XOR of two elements is 0 if both elements are the same, and XOR of a number x with 0 is x 
  arrayOfIntegers = arrayOfIntegers[0]
    .split(' ')
    .forEach(integer => result = result ^ integer);

  // print the result
  console.log(result);
}

oodTimes(['1 2 3 2 3 1 3']);
oodTimes(['5 7 2 7 5 2 5']);