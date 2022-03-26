function equalPairs(input) {

    let countNumbers = Number(input[0]) * 2;

    let firstNumber = 0;
    let secondNumber = 0;
    let thirdNumber = 0;
    let fourthNumber = 0;

    let sum1 = 0;
    let sum2 = 0;

    let diff = 0;
    let maxDiff = 0;

    if (countNumbers === 2) {
        console.log(`Yes, value=${Number(input[1]) + Number(input[2])}`);
    }

    for (let i = 1; i <= countNumbers; i += 2) {

        firstNumber = Number(input[i]);
        secondNumber = Number(input[i + 1]);
        sum1 = firstNumber + secondNumber;

        thirdNumber = Number(input[i+2]);
        fourthNumber = Number(input[i+3]);
        sum2 = thirdNumber + fourthNumber;

        maxDiff = Math.abs(sum1 - sum2);

       if (sum1 === sum2) {
        console.log(`Yes, value=${firstNumber + secondNumber}`);
       } else {
        console.log(`No, maxdiff=${maxDiff}`);
       }
    }

}
//equalPairs(["3", "1", "2", "0", "3", "4", "-1"]);
equalPairs(["4", "1", "1", "3", "1", "2", "2", "0", "0"]);
equalPairs(["2", "-1", "0", "0", "-1"]);
equalPairs(["2", "1", "2", "2", "2"]);
equalPairs(["1", "5", "5"]);
equalPairs(["2", "-1", "2", "0", "-1"]);