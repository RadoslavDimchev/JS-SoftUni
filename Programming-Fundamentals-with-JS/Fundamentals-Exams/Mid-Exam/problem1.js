function burgerBus(input) {
    let cities = Number(input.shift());
    let citiesCounter = 0;
    let totalProfit = 0;

    while (input.length > 0) {
        citiesCounter++;

        let city = input.shift();
        let income = Number(input.shift());
        let expenses = Number(input.shift());

        if (citiesCounter % 5 === 0) {
            income *= 0.9;
        } else if (citiesCounter % 3 === 0) {
            expenses *= 1.5;
        }

        let profit = income - expenses;
        totalProfit += profit;

        console.log(`In ${city} Burger Bus earned ${profit.toFixed(2)} leva.`);
    }

    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);
}

burgerBus(["3",
    "Sofia",
    "895.67",
    "213.50",
    "Plovdiv",
    "2563.20",
    "890.26",
    "Burgas",
    "2360.55",
    "600.00"]);
burgerBus(["5",
    "Lille",
    "2226.00",
    "1200.60",
    "Rennes",
    "6320.60",
    "5460.20",
    "Reims",
    "600.20",
    "452.32",
    "Bordeaux",
    "6925.30",
    "2650.40",
    "Montpellier",
    "680.50",
    "290.20"]);