function amazingNumbers(number) {
    let numberToString = number.toString();
    let sum = 0;

    for (let i = 0; i < numberToString.length; i++) {
        let currentNumber = Number(numberToString[i]);
        sum += currentNumber;
    }

    let sumToString = sum.toString();
    let isAmazing = false;

    for (let i = 0; i < sumToString.length; i++) {
        let currentChar = sumToString[i];
        if (currentChar === '9') {
            isAmazing = true;
            break;
        }
    }

    let printResult = isAmazing ? 'True' : 'False';
    console.log(`${number} Amazing? ${printResult} `);

    // let numberToString = number.toString();
    // let sum = 0;

    // for (let i = 0; i < numberToString.length; i++) {
    //     let currentNumber = Number(numberToString[i]);
    //     sum += currentNumber;
    // }

    // let result = sum.toString().includes('9');
    // console.log(`${number} Amazing? ${result ? 'True' : 'False'}`);
    // second solution
}

amazingNumbers(1233);
amazingNumbers(999);
amazingNumbers(583472);