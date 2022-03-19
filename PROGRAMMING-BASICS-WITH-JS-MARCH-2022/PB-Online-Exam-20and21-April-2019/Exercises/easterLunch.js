function easterLunch(input) {

    let easterBreadNumber = Number(input[0]);
    let eggsNumber = Number(input[1]);
    let cookiesKg = Number(input[2]);

    let easterBreadPrice = easterBreadNumber * 3.20;
    let eggsPrice = eggsNumber * 4.35;
    let cookiesPrice = cookiesKg * 5.40;
    let paintForEggsPrice = eggsNumber * 12 * 0.15;

    let finalPrice = easterBreadPrice + eggsPrice + cookiesPrice + paintForEggsPrice;

    console.log(finalPrice.toFixed(2));
}

easterLunch(["3", "2", "3"]);
easterLunch(["4", "4", "3"]);