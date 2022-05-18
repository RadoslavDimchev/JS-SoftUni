function oddAndEvenSum(number) {
    let numberAsString = number.toString();

    function oddNumbers(numberAsString) {
        let oddSum = 0;
        for (let i = 0; i < numberAsString.length; i++) {
            let currNumber = Number(numberAsString[i]);
            if (currNumber % 2 !== 0) {
                oddSum += currNumber;
            }
        }
        return oddSum;
    }

    function evenNumbers(numberAsString) {
        let evenSum = 0;
        for (let i = 0; i < numberAsString.length; i++) {
            let currNumber = Number(numberAsString[i]);
            if (currNumber % 2 === 0) {
                evenSum += currNumber;
            }
        }
        return evenSum;
    }

    console.log(
        `Odd sum = ${oddNumbers(numberAsString)}, Even sum = ${evenNumbers(numberAsString)}`
    );
}

oddAndEvenSum(1000435);