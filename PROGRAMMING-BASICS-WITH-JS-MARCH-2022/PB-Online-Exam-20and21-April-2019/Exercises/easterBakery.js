function easterBakery(input) {

    let flourOneKgPrice = Number(input[0]);
    let flourKg = Number(input[1]);
    let sugarKg = Number(input[2]);
    let eggsKoriNumber = Number(input[3]);
    let leavenPackageNumber = Number(input[4]);

    let sugarOneKgPrice = flourOneKgPrice * 0.75;
    let eggsOneKoraPrice = flourOneKgPrice * 1.10;
    let leavenOnePackagePrice = sugarOneKgPrice * 0.20;

    let flourSum = flourOneKgPrice * flourKg;
    let sugarSum = sugarOneKgPrice * sugarKg;
    let eggsSum = eggsOneKoraPrice * eggsKoriNumber;
    let leavenSum = leavenOnePackagePrice * leavenPackageNumber;

    let finalSum = flourSum + sugarSum + eggsSum + leavenSum;

    console.log(finalSum.toFixed(2));
}

easterBakery(["50", "10", "3.5", "6", "1"]);
easterBakery(["63.44", "3.57", "6.35", "8", "2"]);
