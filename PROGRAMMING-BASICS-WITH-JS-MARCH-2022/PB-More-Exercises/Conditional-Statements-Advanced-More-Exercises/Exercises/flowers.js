function flowers(input) {

    let chrysanthemums = Number(input[0]);
    let roses = Number(input[1]);
    let tulips = Number(input[2]);
    let season = input[3];
    let holiday = input[4];

    let chrysanthemumsPrice = 0;
    let rosesPrice = 0;
    let tulipsPrice = 0;

    switch (season) {
        case "Spring":
        case "Summer":
            chrysanthemumsPrice = 2;
            rosesPrice = 4.10;
            tulipsPrice = 2.50; break;
        case "Autumn":
        case "Winter":
            chrysanthemumsPrice = 3.75;
            rosesPrice = 4.50;
            tulipsPrice = 4.15; break;
    }

    let flowersPrice = chrysanthemums * chrysanthemumsPrice + roses * rosesPrice + tulips * tulipsPrice;

    if (holiday === "Y") {
        flowersPrice *= 1.15;
    }

    if (tulips > 7 && season === "Spring") {
        flowersPrice *= 0.95;
    }

    if (roses >= 10 && season === "Winter") {
        flowersPrice *= 0.90;
    }

    let flowersCount = chrysanthemums + roses + tulips;

    if (flowersCount > 20) {
        flowersPrice *= 0.80;
    }

    flowersPrice = flowersPrice + 2;

    console.log(flowersPrice.toFixed(2));
}
flowers(["2", "4", "8", "Spring", "Y"]);
flowers(["3", "10", "9", "Winter", "N"]);
flowers(["10", "10", "10", "Autumn", "N"]);