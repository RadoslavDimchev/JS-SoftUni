function mergeArrays(firstArr, secondArr) {
    let thirdArr = [];
    let arrayLength = firstArr.length;

    for (let i = 0; i < arrayLength; i++) {
        let firstElement = firstArr[i];
        let secondElement = secondArr[i];

        if (i % 2 === 0) {
            let sum = Number(firstElement) + Number(secondElement);
            thirdArr.push(sum);
        } else {
            let concatenation = firstElement + secondElement;
            thirdArr.push(concatenation);
        }
    }

    console.log(thirdArr.join(' - '));
}

mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']);
mergeArrays(['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']);