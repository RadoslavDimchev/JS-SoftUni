function bitDestroyer(integer, position) {
  let mask;
  let newNumber;

  // shift the number 1, p times to the left 
  mask = 1 << position;

  // invert the mask 
  mask = ~mask;

  // you copy all the bits of the number, and you set the bit at position p to 0;
  // - save the result in newNumber
  newNumber = integer & mask;

  // print the result on the console
  console.log(newNumber);
}

bitDestroyer(1313, 5);
bitDestroyer(231, 2);
bitDestroyer(111, 6);
bitDestroyer(111, 4);