function bitAtPosition1(integer) {
  // find the value of the bit at position 1
  integer = integer >> 1; // 1 is position
  const bit = integer & 1; // last bit formula

  // print the result on the console
  console.log(bit);
}

bitAtPosition1(2);
bitAtPosition1(51);
bitAtPosition1(13);
bitAtPosition1(24);