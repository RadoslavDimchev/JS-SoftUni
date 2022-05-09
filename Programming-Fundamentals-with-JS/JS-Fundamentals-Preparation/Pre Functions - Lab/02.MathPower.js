function mathPower(number, power) {
    let result = 1;

    for (let i = 1; i <= power; i++) {
        result *= number;
    }

    console.log(result);
}

mathPower(2, 8);
mathPower(3, 4);