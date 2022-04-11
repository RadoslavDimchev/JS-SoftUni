function basketballEquipment(input) {

    let tax = Number(input[0]);

    let shoesPrice = tax * 0.60;
    let outfitPrice = shoesPrice * 0.80;
    let ballPrice = outfitPrice / 4;
    let accessoriesPrice = ballPrice / 5;

    let finalPrice = tax + shoesPrice + outfitPrice + ballPrice + accessoriesPrice;

    console.log(finalPrice);

}
basketballEquipment(["365"]);