function magicSum(array, magicNumber) {
    let magicPairs = [];
    let arrayLength = array.length;

    for (let i = 0; i < arrayLength; i++) {
        let firstNumber = array[i];
        for (let j = i + 1; j < arrayLength; j++) {
            let secondNumber = array[j];
            if (firstNumber + secondNumber === magicNumber) {
                let pair = `${firstNumber} ${secondNumber}`;
                magicPairs.push(pair);
            }
        }
    }

    console.log(magicPairs.join('\n'));
}

magicSum([1, 7, 6, 2, 19, 23], 8);
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
magicSum([1, 2, 3, 4, 5, 6], 6);