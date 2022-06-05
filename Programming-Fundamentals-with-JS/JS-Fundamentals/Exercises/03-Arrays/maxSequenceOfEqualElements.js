function maxSequenceOfEqualElements(array) {
    let maxSequence = [];

    for (let i = 0; i < array.length; i++) {
        let currentSequence = [];
        let firstNumber = array[i];

        for (let j = i; j < array.length; j++) {
            let secondNumber = array[j];
            if (firstNumber === secondNumber) {
                currentSequence.push(firstNumber);
            } else {
                break;
            }
        }

        if (currentSequence.length > maxSequence.length) {
            maxSequence = currentSequence;
        }
    }

    console.log(maxSequence.join(' '));
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequenceOfEqualElements([4, 4, 4, 4]);
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);