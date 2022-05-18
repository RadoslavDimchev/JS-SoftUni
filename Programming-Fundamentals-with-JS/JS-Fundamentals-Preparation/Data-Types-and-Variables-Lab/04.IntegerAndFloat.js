function integerAndFloat(firstNum, secondNum, thirdNum) {
    let sum = firstNum + secondNum + thirdNum;

    let type = sum % 1 == 0 ? 'Integer' : 'Float';
    console.log(`${sum} - ${type}`);
}

integerAndFloat(9, 100, 1.1);
integerAndFloat(100, 200, 303);