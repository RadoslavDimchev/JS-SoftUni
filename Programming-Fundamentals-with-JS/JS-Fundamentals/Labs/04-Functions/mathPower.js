function mathPower(number, power) {
    let result = 1;

    for (let i = 0; i < power; i++) {
        result *= number;
    }

    console.log(result);

    // second solution on one line
    // console.log(Math.pow(number, power));
}

mathPower(2, 8);
mathPower(3, 4);