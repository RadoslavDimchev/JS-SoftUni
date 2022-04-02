function coffeeMachine(input) {

    let drink = input[0];
    let sugar = input[1];
    let numberOfDrinks = Number(input[2]);

    let price = 0;

    switch (drink) {
        case "Espresso":
            if (sugar === "Without") {
                price = 0.90 * numberOfDrinks;
                price *= 0.65;
            } else if (sugar === "Normal") {
                price = 1 * numberOfDrinks;
            } else if (sugar === "Extra") {
                price = 1.20 * numberOfDrinks;
            }

            if (numberOfDrinks >= 5) {
                price *= 0.75;
            }
            break;
        case "Cappuccino":
            if (sugar === "Without") {
                price = 1 * numberOfDrinks;
                price *= 0.65;
            } else if (sugar === "Normal") {
                price = 1.20 * numberOfDrinks;
            } else if (sugar === "Extra") {
                price = 1.60 * numberOfDrinks;
            }
            break;
        case "Tea":
            if (sugar === "Without") {
                price = 0.50 * numberOfDrinks;
                price *= 0.65;
            } else if (sugar === "Normal") {
                price = 0.60 * numberOfDrinks;
            } else if (sugar === "Extra") {
                price = 0.70 * numberOfDrinks;
            }
            break;
    }

    if (price > 15) {
        price *= 0.80;
    }

    console.log(`You bought ${numberOfDrinks} cups of ${drink} for ${price.toFixed(2)} lv.`)

}
coffeeMachine(["Espresso", "Without", "10"]);
coffeeMachine(["Cappuccino", "Normal", "13"]);
coffeeMachine(["Tea", "Extra", "3"]);
