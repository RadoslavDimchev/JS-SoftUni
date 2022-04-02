function equalPairs(input) {

    let countNumbers = Number(input[0]) * 2;

    let firstNum = 0;
    let secondNum = 0;
    let thirdNum = 0;
    let fourthNum = 0;

    let sum = 0;
    let sum2 = 0;

    let diff = 0;
    let maxDiff = 0;

    let equalSum = true;

    if (countNumbers === 2) {
        console.log(`Yes, value=${Number(input[1]) + Number(input[2])}`);
    }

    for (let i = 1; i <= countNumbers; i += 2) {

        firstNum = Number(input[i]);
        secondNum = Number(input[i + 1]);

        if (i === (countNumbers - 1)) {
            sum = sum2;
            sum2 = firstNum + secondNum;
        } else {
            thirdNum = Number(input[i + 2]);
            fourthNum = Number(input[i + 3]);
            sum = firstNum + secondNum;
            sum2 = thirdNum + fourthNum;
        }

        if (sum === sum2) {
            sum2 = firstNum + secondNum;
        } else {
            diff = Math.abs(sum - sum2);

            if (diff > maxDiff) {
                maxDiff = diff;
            }
            equalSum = false;
        }
    }

    if (equalSum === true) {
        console.log(`Yes, value=${firstNum + secondNum}`);
    } else {
        console.log(`No, maxdiff=${maxDiff}`);
    }
}
//equalPairs(["3", "1", "2", "0", "3", "4", "-1"]);
//equalPairs(["4", "1", "1", "3", "1", "2", "2", "0", "0"]);
//equalPairs(["2", "-1", "0", "0", "-1"]);
//equalPairs(["2", "1", "2", "2", "2"]);
equalPairs(["1", "5", "5"]);
//equalPairs(["2", "-1", "2", "0", "-1"]);
