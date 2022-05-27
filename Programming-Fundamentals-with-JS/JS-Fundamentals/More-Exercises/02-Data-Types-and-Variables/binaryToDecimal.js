function binaryToDecimal(binaryNumber) {
    let binary = binaryNumber.toString();
    let digit = parseInt(binary, 2);
    console.log(digit);
}

binaryToDecimal(00001001);
binaryToDecimal(11110000);