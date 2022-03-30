function addBags(input) {

    let luggageOver20 = Number(input[0]);
    let kgLuggage = Number(input[1]);
    let daysToTrip = Number(input[2]);
    let luggageCount = Number(input[3]);

    let luggagePrice = 0;

    if (kgLuggage < 10) {
        luggagePrice = luggageOver20 * 0.20;
    } else if (kgLuggage <= 20) {
        luggagePrice = luggageOver20 * 0.50;
    } else if (kgLuggage > 20) {
        luggagePrice = luggageOver20;
    }

    if (daysToTrip > 30) {
        luggagePrice *= 1.10;
    } else if (daysToTrip <= 30 && daysToTrip >= 7) {
        luggagePrice *= 1.15;
    } else if (daysToTrip < 7) {
        luggagePrice *= 1.40;
    }

    let totalPrice = luggagePrice * luggageCount;

    console.log(`The total price of bags is: ${totalPrice.toFixed(2)} lv.`);

}
addBags(["30", "18", "15", "2"]);
addBags(["25.50", "5", "36", "6"]);
addBags(["63.80", "23", "3", "1"]);
