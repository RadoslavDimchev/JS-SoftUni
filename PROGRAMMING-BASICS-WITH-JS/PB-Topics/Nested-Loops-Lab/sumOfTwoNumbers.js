function sumOfTwoNumbers(input) {

    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let magicNumber = Number(input[2]);

    let combinations = 0;
    let isFound = false;

    for (let i = startNumber; i <= endNumber; i++) {
        for (let j = startNumber; j <= endNumber; j++) {
            combinations++;
            if (i + j === magicNumber) {
                console.log(`Combination N:${combinations} (${i} + ${j} = ${magicNumber})`);
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break;
        }
    }

    if (!isFound) {
        console.log(`${combinations} combinations - neither equals ${magicNumber}`);
    }

}
sumOfTwoNumbers(["1", "10", "5"]);
sumOfTwoNumbers(["23", "24", "20"]);
sumOfTwoNumbers(["88", "888", "1000"]);
sumOfTwoNumbers(["88", "888", "2000"]);
