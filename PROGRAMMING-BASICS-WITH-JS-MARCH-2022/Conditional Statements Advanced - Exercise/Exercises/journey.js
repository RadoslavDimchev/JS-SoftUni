function journey(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let where;
    let typeJourney;

    if (budget <= 100) {
        where = "Somewhere in Bulgaria";
        switch (season) {
            case "summer":
                typeJourney = "Camp";
                budget *= 0.30; break;
            case "winter":
                typeJourney = "Hotel";
                budget *= 0.70; break;
        }
    } else if (budget <= 1000) {
        where = "Somewhere in Balkans";
        switch (season) {
            case "summer":
                typeJourney = "Camp";
                budget *= 0.40; break;
            case "winter":
                typeJourney = "Hotel";
                budget *= 0.80; break;
        }
    } else if (budget > 1000) {
        where = "Somewhere in Europe";
        typeJourney = "Hotel";
        budget *= 0.90;
    }
    console.log(where);
    console.log(`${typeJourney} - ${budget.toFixed(2)}`);
}
journey(["50", "summer"]);
journey(["75", "winter"]);
journey(["312", "summer"]);
journey(["678.53", "winter"]);
journey(["1500", "summer"]);