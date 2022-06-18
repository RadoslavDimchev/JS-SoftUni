function bombNumbers(sequenceOfNumbers, specialNumbers) {
    let specialBombNumber = specialNumbers[0];
    let bombPower = specialNumbers[1];

    while (sequenceOfNumbers.includes(specialBombNumber)) {
        let specialNumberIndex = sequenceOfNumbers.indexOf(specialBombNumber);
        let startBombIndex = Math.max(0, specialNumberIndex - bombPower);
        let bombLength = bombPower * 2 + 1;

        sequenceOfNumbers.splice(startBombIndex, bombLength);
    }

    let remainingNumbersSum = sequenceOfNumbers.reduce((a, b) => a + b, 0);
    console.log(remainingNumbersSum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1],
    [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3],
    [7, 1]);