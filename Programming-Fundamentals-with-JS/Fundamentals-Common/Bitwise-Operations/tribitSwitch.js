function tribitSwitch(integer, position) {
  // Shift the number 7 (the number 7 has the bits 111, which we use to get 3 consecutive values),
  // p times to the left (where p is the position) by using the << operator.
  // In that way, the 3 bits we want to invert will be at position p. Save the resulting value in the mask.
  let mask = 7 << position;

  // Use the ^ mask operator expression to invert the values of the three bits starting from position p. 
  // By using the following formulae (n ^ mask), you copy all the bits of the number, and you invert the bits at position p, p+1, and p+2.
  // save the result in result
  let result = integer ^ mask

  console.log(result);
}

tribitSwitch(1234, 7);
tribitSwitch(44444, 4);