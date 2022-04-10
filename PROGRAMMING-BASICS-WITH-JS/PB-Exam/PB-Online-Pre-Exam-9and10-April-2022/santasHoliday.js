function santasHoliday(input) {

    let days = Number(input[0]);
    let typeRoom = input[1];
    let rating = input[2];

    let nights = days - 1;
    let price = 0;

    if (nights < 10) {
        switch (typeRoom) {
            case "room for one person":
                price = 18 * nights;
                break;
            case "apartment":
                price = (25 * nights) * 0.70;
                break;
            case "president apartment":
                price = (35 * nights) * 0.90;
                break;
        }
    } else if (nights >= 10 && nights <= 15) {
        switch (typeRoom) {
            case "room for one person":
                price = 18 * nights;
                break;
            case "apartment":
                price = (25 * nights) * 0.65;
                break;
            case "president apartment":
                price = (35 * nights) * 0.85;
                break;
        }
    } else if (nights > 15) {
        switch (typeRoom) {
            case "room for one person":
                price = 18 * nights;
                break;
            case "apartment":
                price = (25 * nights) * 0.50;
                break;
            case "president apartment":
                price = (35 * nights) * 0.80;
                break;
        }
    }

    if (rating === "positive") {
        price *= 1.25;
    } else if (rating === "negative") {
        price *= 0.90;
    }

    console.log(price.toFixed(2));

}
santasHoliday(["14", "apartment", "positive"]);
santasHoliday(["30", "president apartment", "negative"]);
