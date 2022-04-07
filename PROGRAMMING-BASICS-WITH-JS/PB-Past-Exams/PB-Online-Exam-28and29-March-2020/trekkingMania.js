function trekkingMania(input) {

    let groups = Number(input[0]);

    let totalPeople = 0;
    let musala = 0;
    let montblanc = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 1; i <= groups; i++) {
        let people = Number(input[i]);
        totalPeople += people;

        if (people <= 5) {
            musala += people;
        } else if (people <= 12) {
            montblanc += people;
        } else if (people <= 25) {
            kilimanjaro += people;
        } else if (people <= 40) {
            k2 += people;
        } else if (people > 40) {
            everest += people;
        }
    }

    let musalaPercent = musala / totalPeople * 100;
    let montblancPercent = montblanc / totalPeople * 100;
    let kilimanjaroPercent = kilimanjaro / totalPeople * 100;
    let k2Percent = k2 / totalPeople * 100;
    let everestPercent = everest / totalPeople * 100;

    console.log(`${musalaPercent.toFixed(2)}%`);
    console.log(`${montblancPercent.toFixed(2)}%`);
    console.log(`${kilimanjaroPercent.toFixed(2)}%`);
    console.log(`${k2Percent.toFixed(2)}%`);
    console.log(`${everestPercent.toFixed(2)}%`);

}
trekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);
trekkingMania(["5", "25", "41", "31", "250", "6"]);
