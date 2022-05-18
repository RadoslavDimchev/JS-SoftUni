function maxNumber(array) {
    let topIntegers = [];

    for (let i = 0; i < array.length; i++) {
        let isTopInteger = true;
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] <= array[j]) {
                isTopInteger = false;
                break;
            }
        }

        if (isTopInteger) {
            topIntegers.push(array[i]);
        }
    }

    console.log(topIntegers.join(' '));
}

maxNumber([14, 24, 3, 19, 15, 17]);