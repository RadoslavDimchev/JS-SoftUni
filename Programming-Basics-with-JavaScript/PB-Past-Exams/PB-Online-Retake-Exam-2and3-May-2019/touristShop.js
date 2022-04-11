function touristShop(input) {

    let index = 0;
    let budget = Number(input[index]);
    index++;
    let command = input[index];
    let productsCount = 0;
    let totalPrice = 0;

    while (command !== "Stop") {
        let product = command;
        index++;
        productsCount++;

        let productPrice = Number(input[index]);
        index++;

        if (productsCount % 3 === 0) {
            productPrice /= 2;
        }

        if (productPrice > budget) {
            console.log(`You don't have enough money!`);
            console.log(`You need ${(productPrice - budget).toFixed(2)} leva!`);
            break;
        }

        budget -= productPrice;
        totalPrice += productPrice;

        command = input[index];
    }

    if (command === "Stop") {
        console.log(`You bought ${productsCount} products for ${totalPrice.toFixed(2)} leva.`);
    }

}
touristShop(["153.20", "Backpack", "25.20", "Shoes", "54", "Sunglasses", "30", "Stop"]);
touristShop(["54", "Thermal underwear", "24", "Sunscreen", "45"]);
