function club(input) {

    let wishedProfit = Number(input[0]);
    let index = 1;
    let command = input[index];

    let income = 0;

    while (command !== "Party!") {
        let cocktail = input[index];
        index++;
        let countOfCocktails = Number(input[index]);

        let cocktailPrice = cocktail.length;
        let orderPrice = countOfCocktails * cocktailPrice;

        if (orderPrice % 2 === 1) {
            orderPrice *= 0.75;
        }

        income += orderPrice;

        if (income >= wishedProfit) {
            console.log(`Target acquired.`);
            console.log(`Club income - ${income.toFixed(2)} leva.`);
            break;
        }

        index++;
        command = input[index];
    }

    if (command === "Party!") {
        let neededMoney = wishedProfit - income;

        console.log(`We need ${neededMoney.toFixed(2)} leva more.`);
        console.log(`Club income - ${income.toFixed(2)} leva.`);
    }

}
club(["500", "Bellini", "6", "Bamboo", "7", "Party!"]);
club(["100", "Sidecar", "7", "Mojito", "5", "White Russian", "10"]);
