function energyBooster(input) {

    let fruit = input[0];
    let size = input[1];
    let orders = Number(input[2]);
    let price = 0;

    switch (fruit) {
        case "Watermelon":
            if (size === "small") {
                price = 2 * 56;
            } else if (size === "big") {
                price = 5 * 28.70;
            }
            break;
        case "Mango":
            if (size === "small") {
                price = 2 * 36.66;
            } else if (size === "big") {
                price = 5 * 19.60;
            }
            break;
        case "Pineapple":
            if (size === "small") {
                price = 2 * 42.10;
            } else if (size === "big") {
                price = 5 * 24.80;
            }
            break;
        case "Raspberry":
            if (size === "small") {
                price = 2 * 20;
            } else if (size === "big") {
                price = 5 * 15.20;
            }
            break;
    }

    price *= orders;

    if (price >= 400 && price <= 1000) {
        price *= 0.85;
    } else if (price > 1000) {
        price *= 0.50;
    }

    console.log(`${price.toFixed(2)} lv.`);

}
energyBooster(["Watermelon", "big", "4"]);
energyBooster(["Pineapple", "small", "1"]);
energyBooster(["Raspberry", "small", "50"]);
energyBooster(["Mango", "big", "8"]);
