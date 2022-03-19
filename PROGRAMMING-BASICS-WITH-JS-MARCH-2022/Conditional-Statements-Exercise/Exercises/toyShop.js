function toyShop(input) {

    let tripPrice = Number(input[0]);
    let puzzlesCount = Number(input[1]);
    let talkingDollsCount = Number(input[2]);
    let teddyBearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let toysTotalPrice = puzzlesCount * 2.60 + talkingDollsCount * 3 +
        teddyBearsCount * 4.10 + minionsCount * 8.20 + trucksCount * 2;

    let toysCount = puzzlesCount + talkingDollsCount + teddyBearsCount +
        minionsCount + trucksCount;

    if (toysCount >= 50) {
        toysTotalPrice = toysTotalPrice * 0.75;
    }

    let profitAfterRent = toysTotalPrice * 0.90;

    if (profitAfterRent >= tripPrice) {
        console.log(`Yes! ${(profitAfterRent - tripPrice).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${(tripPrice - profitAfterRent).toFixed(2)} lv needed.`)
    }
}

toyShop(["40.8", "20", "25", "30", "50", "10"]);
toyShop(["320", "8", "2", "5", "5", "1"]);