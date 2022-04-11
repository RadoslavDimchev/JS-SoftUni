function matchTickets(input) {

    let budget = Number(input[0]);
    let category = input[1];
    let people = Number(input[2]);

    if (people >= 1 && people <= 4) {
        budget *= 0.25;
    } else if (people >= 5 && people <= 9) {
        budget *= 0.40;
    } else if (people >= 10 && people <= 24) {
        budget *= 0.50;
    } else if (people >= 25 && people <= 49) {
        budget *= 0.60;
    } else if (people >= 50) {
        budget *= 0.75;
    }

    let vipPrice = 499.99;
    let normalPrice = 249.99;

    let totalVipPrice = vipPrice * people;
    let totalNormalPrice = normalPrice * people;

    let moneyVip = Math.abs(budget - totalVipPrice);
    let moneyNormal = Math.abs(budget - totalNormalPrice);

    switch (category) {
        case "VIP":
            if (budget >= totalVipPrice) {
                console.log(`Yes! You have ${moneyVip.toFixed(2)} leva left.`);
            } else {
                console.log(`Not enough money! You need ${moneyVip.toFixed(2)} leva.`);
            }
            break;
        case "Normal":
            if (budget >= totalNormalPrice) {
                console.log(`Yes! You have ${moneyNormal.toFixed(2)} leva left.`);
            } else {
                console.log(`Not enough money! You need ${moneyNormal.toFixed(2)} leva.`);
            }
            break;
    }
}
matchTickets(["1000", "Normal", "1"]);
matchTickets(["30000", "VIP", "49"]);