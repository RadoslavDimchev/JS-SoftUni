function signOfIntegerNumber(n) {
    if (n > 0) {
        console.log(`The number ${n} is positive.`);
    } else if (n < 0) {
        console.log(`The number ${n} is negative.`);
    } else {
        console.log('The number 0 is zero.');
    }
}

signOfIntegerNumber(2);
signOfIntegerNumber(-5);
signOfIntegerNumber(0);