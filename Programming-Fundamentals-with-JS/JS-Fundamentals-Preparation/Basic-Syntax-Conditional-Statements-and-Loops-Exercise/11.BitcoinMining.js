function bitcoinMining(input) {
    let index = 0;
    let shift = Number(input[index]);
    index++;

    let bitcoinPrice = 11949.16;
    let gramGoldPrice = 67.51;

    let days = 0;
    let money = 0;
    let bitcoinsCount = 0;
    let firstBitcoinDay = 0;
    let firstBitcoin = 0;

    while (shift) {
        days++;
        if (days % 3 === 0) {
            shift *= 0.70;
        }
        money += shift * gramGoldPrice;

        if (money >= bitcoinPrice) {
            firstBitcoin++;
            if (firstBitcoin === 1) {
                firstBitcoinDay = days;
            }
        }

        shift = Number(input[index]);
        index++;
    }

    if (money >= bitcoinPrice) {
        bitcoinsCount += Math.trunc(money / bitcoinPrice);
    }
    money -= bitcoinsCount * bitcoinPrice;

    console.log(`Bought bitcoins: ${bitcoinsCount}`);
    if (firstBitcoinDay > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}

bitcoinMining([100, 200, 300]);
bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);