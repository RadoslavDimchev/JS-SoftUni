function poolDay(input) {

    let people = Number(input[0]);
    let entranceFeePrice = Number(input[1]);
    let deckChairPrice = Number(input[2]);
    let umbrellaPrice = Number(input[3]);

    let entranceFee = people * entranceFeePrice;
    let deckChairs = Math.ceil(people * 0.75) * deckChairPrice;
    let umbrellas = Math.ceil(people * 0.50) * umbrellaPrice;

    let total = (entranceFee + deckChairs + umbrellas).toFixed(2)

    console.log(`${total} lv.`);
}
poolDay(["21", "5.50", "4.40", "6.20"]);
poolDay(["50", "6", "8", "4"]);
poolDay(["100", "8", "6", "4"]);