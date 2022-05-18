function sumDigits(number) {
    let sum = 0;
    let numberAsString = number.toString();
    for (let char of numberAsString) {
        sum += Number(char);
    }
    console.log(sum);
}

sumDigits(245678);
sumDigits(97561);