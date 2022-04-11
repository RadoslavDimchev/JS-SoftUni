function safari(input) {

    let budget = Number(input[0]);
    let fuelLiters = Number(input[1]);
    let day = input[2];

    let moneyToSpend = fuelLiters * 2.10 + 100;

    if (day === "Saturday") {
        moneyToSpend *= 0.9;
    } else if (day === "Sunday") {
        moneyToSpend *= 0.8;
    }

    budget -= moneyToSpend;

    if (budget >= 0) {
        console.log(`Safari time! Money left: ${budget.toFixed(2)} lv.`);
    } else {
        console.log(`Not enough money! Money needed: ${Math.abs(budget).toFixed(2)} lv.`);
    }

}
safari(["1000", "10", "Sunday"]);
safari(["120", "30", "Saturday"]);
