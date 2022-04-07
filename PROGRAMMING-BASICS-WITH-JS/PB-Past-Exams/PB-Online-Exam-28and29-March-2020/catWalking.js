function catWalking(input) {

    let mins = Number(input[0]);
    let walks = Number(input[1]);
    let calories = Number(input[2]);

    let burnedCalories = (mins * 5) * walks;

    if (burnedCalories >= calories / 2) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${burnedCalories}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${burnedCalories}.`);
    }

}
catWalking(["30", "3", "600"]);
catWalking(["15", "2", "500"]);
