function travelAgency(input) {

    let cityName = input[0];
    let packageType = input[1];
    let vip = input[2];
    let days = Number(input[3]);

    let price = 0;

    if (days <= 0) {
        console.log(`Days must be positive number!`);
    }

    if(days > 7) {
        days -= 1;
    }

    switch (cityName) {
        case "Bansko":
        case "Borovets":
            if (packageType === "withEquipment") {
                price = days * 100;

                if (vip === "yes") {
                    price *= 0.90;
                }

            } else if (packageType === "noEquipment") {
                price = days * 80;

                if (vip === "yes") {
                    price *= 0.95;
                }

            } else {
                console.log(`Invalid input!`);
            }
            break;
        case "Varna":
        case "Burgas":
            if (packageType === "withBreakfast") {
                price = days * 130;

                if (vip === "yes") {
                    price *= 0.88;
                }

            } else if (packageType === "noBreakfast") {
                price = days * 100;

                if (vip === "yes") {
                    price *= 0.93;
                }

            } else {
                console.log(`Invalid input!`);
            }
            break;
        default:
            console.log(`Invalid input!`);
            break;
    }

    if (price > 0) {
        console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`);
    }

}
travelAgency(["Borovets", "noEquipment", "yes", "6"]);
travelAgency(["Bansko", "withEquipment", "no", "2"]);
travelAgency(["Varna", "withBreakfast", "yes", "5"]);
travelAgency(["Burgas", "noBreakfast", "no", "4"]);
travelAgency(["Varna", "withBreakfast", "no", "0"]);
travelAgency(["Gabrovo", "noBreakfast", "no", "3"]);
