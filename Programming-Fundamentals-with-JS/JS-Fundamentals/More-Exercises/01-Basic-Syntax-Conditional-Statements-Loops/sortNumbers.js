function sortNumbers(numberOne, numberTwo, numberThree) {
    let numbers = [numberOne, numberTwo, numberThree];
    numbers.sort((a, b) => b - a);
    console.log(numbers.join('\n'));

    // if (numberOne > numberTwo && numberOne > numberThree) {
    //     console.log(numberOne);
    //     if (numberTwo > numberThree) {
    //         console.log(numberTwo);
    //         console.log(numberThree);
    //     } else {
    //         console.log(numberThree);
    //         console.log(numberTwo);
    //     }
    // } else if (numberTwo > numberOne && numberTwo > numberThree) {
    //     console.log(numberTwo);
    //     if (numberOne > numberThree) {
    //         console.log(numberOne);
    //         console.log(numberThree);
    //     } else {
    //         console.log(numberThree);
    //         console.log(numberOne);
    //     }
    // } else if (numberThree > numberOne && numberThree > numberTwo) {
    //     console.log(numberThree);
    //     if (numberOne > numberTwo) {
    //         console.log(numberOne);
    //         console.log(numberTwo);
    //     } else {
    //         console.log(numberTwo);
    //         console.log(numberOne);
    //     }
    // }
}

sortNumbers(2, 1, 3);