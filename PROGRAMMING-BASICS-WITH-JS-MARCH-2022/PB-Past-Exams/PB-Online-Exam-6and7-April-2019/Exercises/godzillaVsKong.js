function godzillaVsKong(input) {

    let budget = Number(input[0]);
    let statists = Number(input[1]);
    let oneOutfitPrice = Number(input[2]);

    let decor = budget * 0.10;
    let outfitsPrice = statists * oneOutfitPrice;

    if (statists >= 150) {
        outfitsPrice *= 0.90;
    }

    let sum = decor + outfitsPrice;

    let notEnoughMoney = sum - budget;
    let remainingMoney = budget - sum;

    let res1 = 0;
    let res2 = 0;

    if (budget < sum) {
        res1 = "Not enough money!";
        res2 = `Wingard needs ${notEnoughMoney.toFixed(2)} leva more.`;
    } else {
        res1 = "Action!";
        res2 = `Wingard starts filming with ${remainingMoney.toFixed(2)} leva left.`;
    }

    console.log(res1);
    console.log(res2);
}
godzillaVsKong(["20000", "120", "55.5"]);
godzillaVsKong(["15437.62", "186", "57.99"]);
godzillaVsKong(["9587.88", "222", "55.68"]);