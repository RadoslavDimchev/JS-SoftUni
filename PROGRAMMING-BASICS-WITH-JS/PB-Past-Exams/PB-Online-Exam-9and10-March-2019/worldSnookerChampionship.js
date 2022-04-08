function worldSnookerChampionship(input) {

    let stage = input[0];
    let ticketType = input[1];
    let ticketsCount = Number(input[2]);
    let photo = input[3];
    let price = 0;
    let yesPhoto = false;

    switch (stage) {
        case "Quarter final":
            if (ticketType === "Standard") {
                price = 55.50;
            } else if (ticketType === "Premium") {
                price = 105.20;
            } else if (ticketType === "VIP") {
                price = 118.90;
            }
            break;
        case "Semi final":
            if (ticketType === "Standard") {
                price = 75.88;
            } else if (ticketType === "Premium") {
                price = 125.22;
            } else if (ticketType === "VIP") {
                price = 300.40;
            }
            break;
        case "Final":
            if (ticketType === "Standard") {
                price = 110.10;
            } else if (ticketType === "Premium") {
                price = 160.66;
            } else if (ticketType === "VIP") {
                price = 400;
            }
            break;
    }
    price *= ticketsCount;

    if (price > 4000) {
        price *= 0.75;
        yesPhoto = true;
    } else if (price > 2500) {
        price *= 0.90;
    }

    if (photo === "Y") {
        if (yesPhoto) {
        } else {
            price += 40 * ticketsCount;
        }
    }
    console.log(price.toFixed(2));

}
worldSnookerChampionship(["Final", "Premium", "25", "Y"]);
worldSnookerChampionship(["Semi final", "VIP", "9", "Y"]);
worldSnookerChampionship(["Quarter final", "Standard", "11", "N"]);
