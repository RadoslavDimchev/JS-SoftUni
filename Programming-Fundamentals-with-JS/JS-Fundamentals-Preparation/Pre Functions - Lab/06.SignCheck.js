function signCheck(numOne, numTwo, numThree) {
    let negativeNumbers = 0;

    if (isNegative(numOne)) {
        negativeNumbers++;
    }
    if (isNegative(numTwo)) {
        negativeNumbers++;
    }
    if (isNegative(numThree)) {
        negativeNumbers++;
    }

    if (negativeNumbers % 2 === 0) {
        console.log('Positive');
    } else {
        console.log('Negative');
    }

    function isNegative(number) {
        return number < 0;
    }
}

signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);