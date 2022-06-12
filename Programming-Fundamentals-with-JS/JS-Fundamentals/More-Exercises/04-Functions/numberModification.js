function numberModification(number) {
    let modifiedNumber = number;

    while (averageValue(modifiedNumber) < 5) {
        modifyNumber();
    }

    return modifiedNumber;

    function averageValue(num) {
        let sum = 0;
        let numberAsString = num.toString();
        for (let digit of numberAsString) {
            sum += Number(digit);
        }

        let averageSum = sum / numberAsString.length;
        return averageSum;
    }

    function modifyNumber() {
        modifiedNumber += '9';
        return modifiedNumber;
    }
}

console.log(numberModification(101));
console.log(numberModification(5835));