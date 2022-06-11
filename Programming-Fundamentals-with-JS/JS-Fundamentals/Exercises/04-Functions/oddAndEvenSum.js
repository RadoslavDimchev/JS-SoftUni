function oddAndEvenSum(number) {
    let oddSum = 0;
    let evenSum = 0;

    let numbersAsString = String(number);

    for (const char of numbersAsString) {
        let currentNumber = Number(char);

        if (currentNumber % 2 === 0) {
            evenSum += currentNumber;
        } else {
            oddSum += currentNumber;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);