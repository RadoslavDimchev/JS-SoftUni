function tradeCommissions(input) {

    let city = input[0];
    let salesVolume = Number(input[1]);

    let commission = 0;

    switch (city) {
        case "Sofia":
            if (salesVolume > 0 && salesVolume <= 500) {
                commission = salesVolume * 0.05;
            } else if (salesVolume > 500 && salesVolume <= 1000) {
                commission = salesVolume * 0.07;
            } else if (salesVolume > 1000 && salesVolume <= 10000) {
                commission = salesVolume * 0.08;
            } else if (salesVolume > 10000) {
                commission = salesVolume * 0.12;
            } else {
                console.log("error");
            }
            break;
        case "Varna":
            if (salesVolume > 0 && salesVolume <= 500) {
                commission = salesVolume * 0.045;
            } else if (salesVolume > 500 && salesVolume <= 1000) {
                commission = salesVolume * 0.075;
            } else if (salesVolume > 1000 && salesVolume <= 10000) {
                commission = salesVolume * 0.1;
            } else if (salesVolume > 10000) {
                commission = salesVolume * 0.13;
            } else {
                console.log("error");
            }
            break;
        case "Plovdiv":
            if (salesVolume > 0 && salesVolume <= 500) {
                commission = salesVolume * 0.055;
            } else if (salesVolume > 500 && salesVolume <= 1000) {
                commission = salesVolume * 0.08;
            } else if (salesVolume > 1000 && salesVolume <= 10000) {
                commission = salesVolume * 0.12;
            } else if (salesVolume > 10000) {
                commission = salesVolume * 0.145;
            } else {
                console.log("error");
            }
            break;
        default: console.log("error"); break;
    }

    if (commission > 0) {
        console.log(commission.toFixed(2));
    }
}
tradeCommissions(["Sofia", "1500"]);
tradeCommissions(["Plovdiv", "499.99"]);
tradeCommissions(["Varna", "3874.50"]);
tradeCommissions(["Kaspichan", "-50"]);