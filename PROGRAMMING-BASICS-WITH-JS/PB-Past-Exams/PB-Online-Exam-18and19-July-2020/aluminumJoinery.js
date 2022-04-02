function aluminumJoinery(input) {

    let joineryCount = Number(input[0]);
    let joineryType = input[1];
    let delivery = input[2];

    let priceForOne = 0;
    let totalPrice;

    if (joineryCount < 10) {
        console.log(`Invalid order`);
    } else if (joineryCount >= 10) {

        switch (joineryType) {
            case "90X130":
                priceForOne = 110;
                totalPrice = priceForOne * joineryCount;

                if (joineryCount > 60) {
                    totalPrice *= 0.92;
                } else if (joineryCount > 30) {
                    totalPrice *= 0.95;
                }
                break;
            case "100X150":
                priceForOne = 140;
                totalPrice = priceForOne * joineryCount;

                if (joineryCount > 80) {
                    totalPrice *= 0.90;
                } else if (joineryCount > 40) {
                    totalPrice *= 0.94;
                }
                break;
            case "130X180":
                priceForOne = 190;
                totalPrice = priceForOne * joineryCount;

                if (joineryCount > 50) {
                    totalPrice *= 0.88;
                } else if (joineryCount > 20) {
                    totalPrice *= 0.93;
                }
                break;
            case "200X300":
                priceForOne = 250;
                totalPrice = priceForOne * joineryCount;

                if (joineryCount > 50) {
                    totalPrice *= 0.86;
                } else if (joineryCount > 25) {
                    totalPrice *= 0.91;
                }
                break;
        }

        if (delivery === "With delivery") {
            totalPrice += 60;
        }

        if (joineryCount > 99) {
            totalPrice *= 0.96;
        }

        console.log(`${totalPrice.toFixed(2)} BGN`);
    }

}
aluminumJoinery(["40", "90X130", "Without delivery"]);
aluminumJoinery(["105", "100X150", "With delivery"]);
aluminumJoinery(["2", "130X180", "With delivery"]);
