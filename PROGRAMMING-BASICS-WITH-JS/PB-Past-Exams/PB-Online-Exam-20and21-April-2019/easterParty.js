function easterParty(input) {

    let guests = Number(input[0]);
    let priceForPerson = Number(input[1]);
    let budget = Number(input[2]);

    if (guests >= 10 && guests <= 15) {
        priceForPerson *= 0.85;
    } else if (guests > 15 && guests <= 20) {
        priceForPerson *= 0.80;
    } else if (guests > 20) {
        priceForPerson *= 0.75;
    }

    let cakePrice = budget * 0.10;
    budget -= guests * priceForPerson + cakePrice;

    if (budget >= 0) {
        console.log(`It is party time! ${budget.toFixed(2)} leva left.`);
    } else {
        console.log(`No party! ${Math.abs(budget).toFixed(2)} leva needed.`);
    }

}
easterParty(["18", "30", "450"]);
easterParty(["8", "25", "340"]);
easterParty(["24", "35", "550"]);
