function gameOfIntervals(input) {

    let moves = Number(input[0]);

    let number = 0;
    let sumNumbers = 0;

    let from0To9 = 0;
    let from10To19 = 0;
    let from20To29 = 0;
    let from30To39 = 0;
    let from40To50 = 0;
    let invalidNumbers = 0;

    for (let i = 1; i <= moves; i++) {

        number = Number(input[i]);

        if (number >= 0 && number <= 9) {
            sumNumbers += number * 0.20;
            from0To9++;
        } else if (number >= 10 && number <= 19) {
            sumNumbers += number * 0.30;
            from10To19++;
        } else if (number >= 20 && number <= 29) {
            sumNumbers += number * 0.40;
            from20To29++;
        } else if (number >= 30 && number <= 39) {
            sumNumbers += 50;
            from30To39++;
        } else if (number >= 40 && number <= 50) {
            sumNumbers += 100;
            from40To50++
        } else if (number > 50 || number < 0) {
            sumNumbers /= 2;
            invalidNumbers++;
        }

    }

    let pFrom0To9 = from0To9 / moves * 100;
    let pFrom10To19 = from10To19 / moves * 100;
    let pFrom20To29 = from20To29 / moves * 100;
    let pFrom30To39 = from30To39 / moves * 100;
    let pFrom40To50 = from40To50 / moves * 100;
    let pInvalidNumbers = invalidNumbers / moves * 100;

    console.log(sumNumbers.toFixed(2));
    console.log(`From 0 to 9: ${pFrom0To9.toFixed(2)}%`);
    console.log(`From 10 to 19: ${pFrom10To19.toFixed(2)}%`);
    console.log(`From 20 to 29: ${pFrom20To29.toFixed(2)}%`);
    console.log(`From 30 to 39: ${pFrom30To39.toFixed(2)}%`);
    console.log(`From 40 to 50: ${pFrom40To50.toFixed(2)}%`);
    console.log(`Invalid numbers: ${pInvalidNumbers.toFixed(2)}%`);

}
gameOfIntervals(["10", "43", "57", "-12", "23", "12", "0", "50", "40", "30", "20"]);
