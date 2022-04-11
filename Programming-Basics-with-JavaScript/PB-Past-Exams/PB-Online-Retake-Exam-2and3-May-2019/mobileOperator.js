function mobileOperator(input) {

    let term = input[0];
    let type = input[1];
    let internet = input[2];
    let months = Number(input[3]);
    let price = 0;

    switch (term) {
        case "one":
            switch (type) {
                case "Small":
                    price += 9.98 * months;
                    break;
                case "Middle":
                    price += 18.99 * months;
                    break;
                case "Large":
                    price += 25.98 * months;
                    break;
                case "ExtraLarge":
                    price += 35.99 * months;
                    break;
            }
            break;
        case "two":
            switch (type) {
                case "Small":
                    price += 8.58 * months;
                    break;
                case "Middle":
                    price += 17.09 * months;
                    break;
                case "Large":
                    price += 23.59 * months;
                    break;
                case "ExtraLarge":
                    price += 31.79 * months;
                    break;
            }
            break;
    }

    if (internet === "yes") {
        if (type === "Small") {
            price += 5.5 * months;
        } else if (type === "Middle" || type === "Large") {
            price += 4.35 * months;
        } else if (type === "ExtraLarge") {
            price += 3.85 * months;
        }
    }

    if (term === "two") {
        price *= 0.9625;
    }

    console.log(`${price.toFixed(2)} lv.`);

}
mobileOperator(["one", "Small", "yes", "10"]);
mobileOperator(["two", "Large", "no", "10"]);
