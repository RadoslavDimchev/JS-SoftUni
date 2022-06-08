function signCheck(numOne, numTwo, numThree) {
    let negativeNumber = number => number < 0;

    let negativeNumbersCount = 0;

    if (negativeNumber(numOne)) {
        negativeNumbersCount++;
    }

    if (negativeNumber(numTwo)) {
        negativeNumbersCount++;
    }

    if (negativeNumber(numThree)) {
        negativeNumbersCount++;
    }

    return negativeNumbersCount % 2 === 0 ? 'Positive' : 'Negative';
}

signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);