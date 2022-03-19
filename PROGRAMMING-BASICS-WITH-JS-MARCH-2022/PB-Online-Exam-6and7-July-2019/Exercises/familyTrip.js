function familyTrip(input) {

    let budget = Number(input[0]);
    let nights = Number(input[1]);
    let nightPrice = Number(input[2]);
    let additionalCosts = Number(input[3]);

    if (nights > 7) {
        nightPrice *= 0.95;
    }

    let nightsPrice = nights * nightPrice;
    let additionalCostsPrice = budget * (additionalCosts / 100);

    let sum = nightsPrice + additionalCostsPrice;

    let leftMoney = budget - sum;
    let neededMoney = sum - budget;

    if (budget >= sum) {
        console.log(`Ivanovi will be left with ${leftMoney.toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${neededMoney.toFixed(2)} leva needed.`);
    }
}
familyTrip(["800.50", "8", "100", "2"]);
familyTrip(["500", "7", "66", "15"]);