function bikeRace(input) {

    let juniors = Number(input[0]);
    let seniors = Number(input[1]);
    let typeRoute = input[2];

    let juniorTax = 0;
    let seniorTax = 0;

    switch (typeRoute) {
        case "trail":
            juniorTax = 5.50;
            seniorTax = 7; break;
        case "cross-country":
            juniorTax = 8;
            seniorTax = 9.50; break;
        case "downhill":
            juniorTax = 12.25;
            seniorTax = 13.75; break;
        case "road":
            juniorTax = 20;
            seniorTax = 21.50; break;
    }

    let sumJuniors = juniors * juniorTax;
    let sumSeniors = seniors * seniorTax;

    let totalSum = sumJuniors + sumSeniors;

    let totalCyclists = juniors + seniors;

    if (typeRoute === "cross-country" && totalCyclists >= 50) {
        totalSum *= 0.75;
    }

    totalSum *= 0.95;

    console.log(totalSum.toFixed(2));
}
bikeRace(["10", "20", "trail"]);
bikeRace(["21", "26", "cross-country"]);
bikeRace(["30", "25", "cross-country"]);
bikeRace(["10", "10", "downhill"]);
bikeRace(["3", "40", "road"]);