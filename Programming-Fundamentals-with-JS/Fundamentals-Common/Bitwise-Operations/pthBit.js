function pthBit(integer, p) {
  // find the value of the bit at position p

  // - shift the number p times to the right (where p is the position) by using the >> operator. 
  // - In that way the bit we want to check will be at position 0
  integer = integer >> p;

  // - last bit formula
  const bitAtPositionP = integer & 1;

  // print the result on the console
  console.log(bitAtPositionP);
}

pthBit(2145, 5);
pthBit(512, 0);
pthBit(111, 8);
pthBit(255, 7);