function dishwasher(input) {

    let detergentNumber = Number(input[0]);
    let detergentQuantity = detergentNumber * 750;

    let index = 1;
    let command = input[index];

    let loading = 0;

    let cleanDishes = 0;
    let cleanPots = 0;

    while (detergentQuantity >= 0) {

        if (command === "End") {
            break;
        } else if (command !== "End") {
            let numberDishes = Number(command);
            loading++;

            if (loading % 3 === 0) {
                detergentQuantity -= numberDishes * 15;
                cleanPots += numberDishes;
            } else {
                detergentQuantity -= numberDishes * 5;
                cleanDishes += numberDishes;
            }
        }
        if (detergentQuantity < 0) {
            break;
        }

        index++;
        command = input[index];
    }

    if (detergentQuantity >= 0) {
        console.log(`Detergent was enough!`);
        console.log(`${cleanDishes} dishes and ${cleanPots} pots were washed.`);
        console.log(`Leftover detergent ${detergentQuantity} ml.`);
    } else {
        console.log(`Not enough detergent, ${Math.abs(detergentQuantity)} ml. more necessary!`);
    }

}
dishwasher(["2", "53", "65", "55", "End"]);
dishwasher(["1", "10", "15", "10", "12", "13", "30"]);
