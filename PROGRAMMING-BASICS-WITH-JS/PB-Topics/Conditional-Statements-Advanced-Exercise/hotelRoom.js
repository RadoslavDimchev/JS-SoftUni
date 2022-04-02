function hotelRoom(input) {

    let month = input[0];
    let nights = Number(input[1]);

    let studioPrice = 0;
    let apartmentPrice = 0;

    switch (month) {
        case "May":
        case "October":
            studioPrice = 50;
            apartmentPrice = 65;
            if (nights > 7 && nights <= 14) {
                studioPrice *= 0.95;
            } else if (nights > 14) {
                studioPrice *= 0.70;
            }
            break;
        case "June":
        case "September":
            studioPrice = 75.20;
            apartmentPrice = 68.70;
            if (nights > 14) {
                studioPrice *= 0.80;
            }
            break;
        case "July":
        case "August":
            studioPrice = 76;
            apartmentPrice = 77; break;
    }

    if (nights > 14) {
        apartmentPrice *= 0.90;
    }

    let totalStudioPrice = studioPrice * nights;
    let totalApartmentPrice = apartmentPrice * nights;

    console.log(`Apartment: ${totalApartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${totalStudioPrice.toFixed(2)} lv.`);
}
hotelRoom(["May", "15"]);
hotelRoom(["June", "14"]);
hotelRoom(["August", "20"]);