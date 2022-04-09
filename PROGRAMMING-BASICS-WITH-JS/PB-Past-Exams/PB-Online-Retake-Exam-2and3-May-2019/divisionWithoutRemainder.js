function divisionWithoutRemainder(input) {

    let index = 0;
    let numbers = Number(input[index]);
    index++;

    let twoCounter = 0;
    let threeCounter = 0;
    let fourCounter = 0;

    for (let i = 0; i < numbers; i++) {
        let num = Number(input[index]);
        index++

        if (num % 2 === 0) {
            twoCounter++;
        }
        if (num % 3 === 0) {
            threeCounter++;
        }
        if (num % 4 === 0) {
            fourCounter++;
        }
    }

    let pDivisionTwo = twoCounter / numbers * 100;
    let pDivisionThree = threeCounter / numbers * 100;
    let pDivisionFour = fourCounter / numbers * 100;

    console.log(`${pDivisionTwo.toFixed(2)}%`);
    console.log(`${pDivisionThree.toFixed(2)}%`);
    console.log(`${pDivisionFour.toFixed(2)}%`);

}
divisionWithoutRemainder(["10", "680", "2", "600", "200", "800", "799", "199", "46", "128", "65"]);
divisionWithoutRemainder(["3", "3", "6", "9"]);
