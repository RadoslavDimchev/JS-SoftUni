function godzillaVsKong(input) {

    let budget = Number(input[0]);
    let statistsCount = Number(input[1]);
    let oneOutfitPrice = Number(input[2]);

    let decor = budget * 0.10;
    let outfitPrice = statistsCount * oneOutfitPrice;

    if (statistsCount >= 150) {
        outfitPrice *= 0.90;
    }

    let totalPrice = decor + outfitPrice;

    if (totalPrice <= budget) {
        console.log("Action!")
        console.log(`Wingard starts filming with ${(budget - totalPrice).toFixed(2)} leva left.`)
    } else {
        console.log("Not enough money!")
        console.log(`Wingard needs ${(totalPrice - budget).toFixed(2)} leva more.`)
    }
}

godzillaVsKong(["20000", "120", "55.5"]);
godzillaVsKong(["15437.62", "186", "57.99"]);
godzillaVsKong(["9587.88", "222", "55.68"]);