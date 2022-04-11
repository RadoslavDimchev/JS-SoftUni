function paintingEggs(input) {

    let size = input[0];
    let color = input[1];
    let number = Number(input[2]);
    let price = 0;

    switch (size) {
        case "Large":
            if (color === "Red") {
                price = 16;
            } else if (color === "Green") {
                price = 12;
            } else if (color === "Yellow") {
                price = 9;
            }
            break;
        case "Medium":
            if (color === "Red") {
                price = 13;
            } else if (color === "Green") {
                price = 9;
            } else if (color === "Yellow") {
                price = 7;
            }
            break;
        case "Small":
            if (color === "Red") {
                price = 9;
            } else if (color === "Green") {
                price = 8;
            } else if (color === "Yellow") {
                price = 5;
            }
            break;
    }
    let finalPrice = (price * number) * 0.65;

    console.log(`${finalPrice.toFixed(2)} leva.`);

}
paintingEggs(["Large", "Red", "7"]);
paintingEggs(["Medium", "Green", "5"]);
paintingEggs(["Small", "Yellow", "3"]);
