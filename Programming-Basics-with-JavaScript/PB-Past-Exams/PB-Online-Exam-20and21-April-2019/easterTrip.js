function easterTrip(input) {

    let destination = input[0];
    let dates = input[1];
    let sleepovers = Number(input[2]);
    let sleepoversPrice = 0;

    switch (destination) {
        case "France":
            if (dates === "21-23") {
                sleepoversPrice = 30;
            } else if (dates === "24-27") {
                sleepoversPrice = 35;
            } else if (dates === "28-31") {
                sleepoversPrice = 40;
            }
            break;
        case "Italy":
            if (dates === "21-23") {
                sleepoversPrice = 28;
            } else if (dates === "24-27") {
                sleepoversPrice = 32;
            } else if (dates === "28-31") {
                sleepoversPrice = 39;
            }
            break;
        case "Germany":
            if (dates === "21-23") {
                sleepoversPrice = 32;
            } else if (dates === "24-27") {
                sleepoversPrice = 37;
            } else if (dates === "28-31") {
                sleepoversPrice = 43;
            }
            break;
    }
    let tripCosts = sleepovers * sleepoversPrice;

    console.log(`Easter trip to ${destination} : ${tripCosts.toFixed(2)} leva.`);

}
easterTrip(["Germany", "24-27", "5"]);
easterTrip(["Italy", "21-23", "7"]);
easterTrip(["France", "28-31", "8"]);
