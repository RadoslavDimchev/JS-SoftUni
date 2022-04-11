function footballLeague(input) {

    let capacityStadium = Number(input[0]);
    let fans = Number(input[1]);

    let inputLength = input.length;

    let fansA = 0;
    let fansB = 0;
    let fansV = 0;
    let fansG = 0;

    for (let i = 2; i < inputLength; i++) {

        let sector = input[i];

        switch (sector) {
            case "A": fansA++; break;
            case "B": fansB++; break;
            case "V": fansV++; break;
            case "G": fansG++; break;
        }

    }

    let fansAPercent = fansA / fans * 100;
    let fansBPercent = fansB / fans * 100;
    let fansVPercent = fansV / fans * 100;
    let fansGPercent = fansG / fans * 100;

    let fansPercent = fans / capacityStadium * 100;

    console.log(`${fansAPercent.toFixed(2)}%`);
    console.log(`${fansBPercent.toFixed(2)}%`);
    console.log(`${fansVPercent.toFixed(2)}%`);
    console.log(`${fansGPercent.toFixed(2)}%`);
    console.log(`${fansPercent.toFixed(2)}%`);

}
footballLeague(["76", "10", "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"]);
footballLeague(["93", "16", "A", "V", "G", "G", "B", "B", "G", "B", "A", "B", "B", "B", "A", "B", "B", "A"]);
footballLeague(["1000", "12", "A", "A", "V", "V", "A", "G", "A", "A", "V", "G", "V", "A"]);
