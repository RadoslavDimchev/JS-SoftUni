function amazingNumbers(number) {
    let numberAsString = String(number);
    let sum = 0;

    for (let i = 0; i < numberAsString.length; i++) {
        sum += Number(numberAsString[i]);
    }

    let sumAsString = sum.toString();

    let isAmazing = false;

    for (let j = 0; j < sumAsString.length; j++) {
        if (sumAsString[j] == '9') {
            isAmazing = true;
        }
    }

    console.log(`${number} Amazing? ${isAmazing ? 'True' : 'False'}`);
}

amazingNumbers(1233);
amazingNumbers(999);