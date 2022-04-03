function equalSumsEvenOddPosition(input) {

    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);

    let buff = "";

    for (let i = firstNumber; i <= secondNumber; i++) {
        let currentNumber = i + "";
        let evenSum = 0;
        let oddSum = 0;
        let currentNumberLength = currentNumber.length;
        for (let j = 0; j < currentNumberLength; j++) {
            let currentDigit = Number(currentNumber[j]);

            if (j % 2 === 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
        }
        if (evenSum === oddSum) {
            buff += `${i} `;
        }
    }
    console.log(buff);
}
equalSumsEvenOddPosition(["100000", "100050"]);
equalSumsEvenOddPosition(["123456", "124000"]);
equalSumsEvenOddPosition(["299900", "300000"]);
equalSumsEvenOddPosition(["100115", "100120"]);
