function integerAndFloat(numOne, numTwo, numThree) {
    let sum = numOne + numTwo + numThree;
    let sumType = sum === parseInt(sum) ? 'Integer' : 'Float';

    console.log(`${sum} - ${sumType}`);
}

integerAndFloat(9, 100, 1.1);
integerAndFloat(100, 200, 303);