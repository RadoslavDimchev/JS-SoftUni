function coins(input) {

    let exchange = Number(input[0]);
    let exchageInCoins = Math.trunc(exchange * 100);
    let coinsCounter = 0;

    while (exchageInCoins > 0) {
        if (exchageInCoins >= 200) {
            coinsCounter++;
            exchageInCoins -= 200;
        } else if (exchageInCoins >= 100) {
            coinsCounter++;
            exchageInCoins -= 100;
        } else if (exchageInCoins >= 50) {
            coinsCounter++;
            exchageInCoins -= 50;
        } else if (exchageInCoins >= 20) {
            coinsCounter++;
            exchageInCoins -= 20;
        } else if (exchageInCoins >= 10) {
            coinsCounter++;
            exchageInCoins -= 10;
        } else if (exchageInCoins >= 5) {
            coinsCounter++;
            exchageInCoins -= 5;
        } else if (exchageInCoins >= 2) {
            coinsCounter++;
            exchageInCoins -= 2;
        } else if (exchageInCoins >= 1) {
            coinsCounter++;
            exchageInCoins -= 1;
        }
    }

    console.log(coinsCounter);

}
coins(["1.23"]);
coins(["2"]);
coins(["0.56"]);
coins(["2.73"]);
