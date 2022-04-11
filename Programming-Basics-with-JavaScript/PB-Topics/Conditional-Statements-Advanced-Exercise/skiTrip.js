function skiTrip(input) {

    let days = Number(input[0]);
    let typeRoom = input[1];
    let rating = input[2];

    let nights = days - 1;

    let onePersonRoomPrice = 18;
    let apartmentPrice = 25;
    let presidentApartmentPrice = 35;

    let price = 0;

    switch (typeRoom) {
        case "room for one person":
            price = nights * onePersonRoomPrice; break;
        case "apartment":
            price = nights * apartmentPrice;
            if (nights < 10) {
                price *= 0.70;
            } else if (nights >= 10 && nights <= 15) {
                price *= 0.65;
            } else if (nights > 15) {
                price *= 0.50;
            }
            break;
        case "president apartment":
            price = nights * presidentApartmentPrice;
            if (nights < 10) {
                price *= 0.90;
            } else if (nights >= 10 && nights <= 15) {
                price *= 0.85;
            } else if (nights > 15) {
                price *= 0.80;
            }
            break;
    }

    if (rating === "positive") {
        price *= 1.25;
    } else if (rating === "negative") {
        price *= 0.90;
    }

    console.log(price.toFixed(2));
}
skiTrip(["14", "apartment", "positive"]);
skiTrip(["30", "president apartment", "negative"]);
skiTrip(["12", "room for one person", "positive"]);
skiTrip(["2", "apartment", "positive"]);