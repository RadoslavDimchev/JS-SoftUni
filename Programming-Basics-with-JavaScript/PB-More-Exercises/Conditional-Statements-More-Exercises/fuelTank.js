function fuelTank(input) {

    let fuel = input[0];
    let liters = Number(input[1]);

    switch (fuel) {
        case "Diesel":
            if (liters >= 25) {
                console.log(`You have enough diesel.`);
            } else if (liters < 25) {
                console.log(`Fill your tank with diesel!`);
            }
            break;
        case "Gasoline":
            if (liters >= 25) {
                console.log(`You have enough gasoline.`);
            } else if (liters < 25) {
                console.log(`Fill your tank with gasoline!`);
            }
            break;
        case "Gas":
            if (liters >= 25) {
                console.log(`You have enough gas.`);
            } else if (liters < 25) {
                console.log(`Fill your tank with gas!`);
            }
            break;
        default: console.log("Invalid fuel!"); break;
    }
}
fuelTank(["Diesel", "10"]);
fuelTank(["Gasoline", "40"]);
fuelTank(["Gas", "25"]);
fuelTank(["Kerosene", "200"]);

function fuelTank(input) {

    let fuel = input[0];
    let liters = Number(input[1]);

    if (fuel === "Diesel") {
        if (liters >= 25) {
            console.log(`You have enough diesel.`);
        } else if (liters < 25) {
            console.log(`Fill your tank with diesel!`);
        }
    } else if (fuel === "Gasoline") {
        if (liters >= 25) {
            console.log(`You have enough gasoline.`);
        } else if (liters < 25) {
            console.log(`Fill your tank with gasoline!`);
        }
    } else if (fuel === "Gas") {
        if (liters >= 25) {
            console.log(`You have enough gas.`);
        } else if (liters < 25) {
            console.log(`Fill your tank with gas!`);
        }
    } else {
        console.log("Invalid fuel!");
    }
}
fuelTank(["Diesel", "10"]);
fuelTank(["Gasoline", "40"]);
fuelTank(["Gas", "25"]);
fuelTank(["Kerosene", "200"]);