function transportPrice(input) {

    let n = Number(input[0]);
    let dayOrNight = input[1];

    let initialTaxiFee = 0.70;
    let taxiDay = 0.79;
    let taxiNight = 0.90;

    let res = 0;

    if (n >= 100) {
        res = n * 0.06;
    } else if (n >= 20) {
        res = n * 0.09;
    } else if (n <= 20, dayOrNight === "day") {
        res = initialTaxiFee + n * taxiDay;
    } else if (n <= 20, dayOrNight === "night") {
        res = initialTaxiFee + n * taxiNight;
    }
    console.log(res.toFixed(2))
}
transportPrice(["5", "day"]);
transportPrice(["7", "night"]);
transportPrice(["25", "day"]);
transportPrice(["180", "night"]);