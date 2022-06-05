function maxNumber(array) {
    let topIntegers = [];
    let arrayLength = array.length;

    for (let i = 0; i < arrayLength; i++) {
        let number = array[i];
        let isTopInteger = true;

        for (let j = i + 1; j < arrayLength; j++) {
            let numberToCompare = array[j]

            if (number <= numberToCompare) {
                isTopInteger = false;
                break;
            }
        }

        if (isTopInteger) {
            topIntegers.push(number);
        }
    }

    console.log(topIntegers.join(' '));
}

maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);