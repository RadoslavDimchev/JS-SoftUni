function fuelTankPart2(input) {

    let fuelType = input[0];
    let quantityFuel = Number(input[1]);
    let clubCard = input[2];

    let gasolinePrice = 2.22;
    let dieselPrice = 2.33;
    let gasPrice = 0.93;
    let sum = 0;

    switch (fuelType) {
        case "Gasoline":
            switch (clubCard) {
                case "Yes":
                    sum = (quantityFuel * (gasolinePrice - 0.18));
                    break;
                case "No":
                    sum = quantityFuel * gasolinePrice;
            }
            break;

        case "Diesel":
            switch (clubCard) {
                case "Yes":
                    sum = (quantityFuel * (dieselPrice - 0.12));
                    break;
                case "No":
                    sum = quantityFuel * dieselPrice;
            }
            break;
        case "Gas":
            switch (clubCard) {
                case "Yes":
                    sum = (quantityFuel * (gasPrice - 0.08));
                    break;
                case "No":
                    sum = quantityFuel * gasPrice;
            }
            break;
    }

    if (quantityFuel >= 20 && quantityFuel <= 25) {
        sum *= 0.92;
    } else if (quantityFuel > 25) {
        sum *= 0.9;
    }

    console.log(`${sum.toFixed(2)} lv.`)
}
fuelTankPart2(["Gas", "30", "Yes"]);
fuelTankPart2(["Gasoline", "25", "No"]);
fuelTankPart2(["Diesel", "19", "No"]);