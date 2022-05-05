function maxSequenceOfEqualElements(array) {
    let maxArray = [];

    for (let i = 0; i < array.length; i++) {
        let firstArray = [];

        for (let j = i; j < array.length; j++) {
            if (array[i] === array[j]) {
                firstArray.push(array[i]);
            } else {
                break;
            }
        }

        if (firstArray.length > maxArray.length) {
            maxArray = firstArray;
        }
    }

    console.log(maxArray.join(' '));
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);