function trekkingMania(input) {

    let groups = Number(input[0]);

    let pClimbingMusala = 0;
    let pClimbingMontblanc = 0;
    let pClimbingKilimanjaro = 0;
    let pClimbingK2 = 0;
    let pClimbingEverest = 0;

    let sumPeople = 0;

    for (let i = 1; i <= groups; i++) {

        let currentPeople = Number(input[i]);
        sumPeople += currentPeople

        if (currentPeople <= 5) {
            pClimbingMusala += currentPeople;
        } else if (currentPeople <= 12) {
            pClimbingMontblanc += currentPeople;
        } else if (currentPeople <= 25) {
            pClimbingKilimanjaro += currentPeople;
        } else if (currentPeople <= 40) {
            pClimbingK2 += currentPeople;
        } else if (currentPeople >= 41) {
            pClimbingEverest += currentPeople;
        }
    }

    console.log(`${(pClimbingMusala / sumPeople * 100).toFixed(2)}%`);
    console.log(`${(pClimbingMontblanc / sumPeople * 100).toFixed(2)}%`);
    console.log(`${(pClimbingKilimanjaro / sumPeople * 100).toFixed(2)}%`);
    console.log(`${(pClimbingK2 / sumPeople * 100).toFixed(2)}%`);
    console.log(`${(pClimbingEverest / sumPeople * 100).toFixed(2)}%`);

}
trekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);
trekkingMania(["5", "25", "41", "31", "250", "6"]);