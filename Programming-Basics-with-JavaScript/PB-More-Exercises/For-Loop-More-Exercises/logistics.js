function logistics(input) {

    let cargoesCount = +input[0];
    let tons = 0;
    let tonPrice = 0;
    let totalCargoesPrice = 0;

    let sumTons = 0;

    let sumMinibusTons = 0;
    let sumTruckTons = 0;
    let sumTrainTons = 0;

    for (let i = 1; i <= cargoesCount; i++) {

        tons = Number(input[i]);

        if (tons <= 3) {
            tonPrice = 200;
            totalCargoesPrice += tons * tonPrice;
            sumMinibusTons += tons;
        } else if (tons <= 11) {
            tonPrice = 175;
            totalCargoesPrice += tons * tonPrice;
            sumTruckTons += tons;
        } else if (tons >= 12) {
            tonPrice = 120;
            totalCargoesPrice += tons * tonPrice;
            sumTrainTons += tons;
        }

        sumTons += tons;
    }

    let averageTonPrice = totalCargoesPrice / sumTons;

    let minibusPercentageTons = sumMinibusTons / sumTons * 100;
    let truckPercentageTons = sumTruckTons / sumTons * 100;
    let trainPercentageTons = sumTrainTons / sumTons * 100;

    console.log(averageTonPrice.toFixed(2));
    console.log(`${minibusPercentageTons.toFixed(2)}%`);
    console.log(`${truckPercentageTons.toFixed(2)}%`);
    console.log(`${trainPercentageTons.toFixed(2)}%`);

}
logistics(["4", "1", "5", "16", "3",]);
logistics(["5", "2", "10", "20", "1", "7"]);
