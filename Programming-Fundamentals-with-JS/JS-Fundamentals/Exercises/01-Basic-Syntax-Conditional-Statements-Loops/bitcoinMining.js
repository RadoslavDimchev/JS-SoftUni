function bitcoinMining(array) {
    let money = 0;
    let oneGramGoldPrice = 67.51;
    let bitcoinPrice = 11949.16;
    let days = 0;
    let boughtBitcoins = 0;
    let dayOfFirstBitcoin = 0;

    for (let grams of array) {
        days++;
        let currentMoney = grams * oneGramGoldPrice;

        if (days % 3 === 0) {
            currentMoney *= 0.70;
        }

        money += currentMoney;

        while (money >= bitcoinPrice) {
            boughtBitcoins++;
            money -= bitcoinPrice;
            if (boughtBitcoins === 1) {
                dayOfFirstBitcoin = days;
            }
        }
    }

    console.log(`Bought bitcoins: ${boughtBitcoins}`);
    if (dayOfFirstBitcoin > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);
    }

    console.log(`Left money: ${money.toFixed(2)} lv.`);
}

bitcoinMining([100, 200, 300]);
bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);