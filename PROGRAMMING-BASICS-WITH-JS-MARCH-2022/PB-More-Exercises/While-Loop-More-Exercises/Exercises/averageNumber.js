function averageNumber(input) {

    let number = Number(input[0]);
    let sum = 0;

    for (let i = 1; i <= number; i++) {
        let currentNumber = Number(input[i]);
        sum += currentNumber;
    }

    let average = sum / number;
    console.log(average.toFixed(2));

}
averageNumber(["4", "3", "2", "4", "2"]);
averageNumber(["2", "6", "4"]);
averageNumber(["3", "82", "43", "22"]);
averageNumber(["4", "95", "23", "76", "23"]);
