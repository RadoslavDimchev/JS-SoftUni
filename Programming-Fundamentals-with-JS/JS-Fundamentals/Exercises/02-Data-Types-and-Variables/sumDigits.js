function sumDigits(number) {
    let numberAsString = String(number);
    let sum = 0;

    for (let i = 0; i < numberAsString.length; i++) {
        let currentNumber = Number(numberAsString[i]);
        sum += currentNumber;
    }

    console.log(sum);
}

sumDigits(245678);
sumDigits(97561);