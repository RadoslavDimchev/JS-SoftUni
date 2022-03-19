function foodDelivery(input) {

    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let vegeterianMenu = Number(input[2]);

    let chickenMenuPrice = chickenMenu * 10.35;
    let fishMenuPrice = fishMenu * 12.40;
    let vegeterianMenuPrice = vegeterianMenu * 8.15;

    let menuPrice = chickenMenuPrice + fishMenuPrice + vegeterianMenuPrice;
    let dessertPrice = menuPrice * 0.20;
    let delivey = 2.50;

    let finalPrice = menuPrice + dessertPrice + delivey;

    console.log(finalPrice);

}
foodDelivery(["2", "4", "3"]);