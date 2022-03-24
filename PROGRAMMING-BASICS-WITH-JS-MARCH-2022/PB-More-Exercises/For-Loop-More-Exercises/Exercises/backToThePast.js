function backToThePast(input) {

    let inheritedMoney = Number(input[0]);
    let yearToLive = Number(input[1]);

    let money = inheritedMoney;

    let years = 18;


    for (let i = 1800; i <= yearToLive; i++) {


        if (i % 2 === 0) {
            money -= 12000;
        } else if (i % 2 === 1) {
            money -= 12000 + 50 * years;
        }

        years++;
    }

    if (money >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${(money).toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${Math.abs(money).toFixed(2)} dollars to survive.`);
    }

}
backToThePast(["50000", "1802"]);
backToThePast(["100000.15", "1808"]);
