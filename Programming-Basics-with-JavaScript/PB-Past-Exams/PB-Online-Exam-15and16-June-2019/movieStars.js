function movieStars(input) {

    let index = 0;
    let budget = Number(input[index]);
    index++;
    let command = input[index];
    index++;

    while (command !== "ACTION") {
        let name = command;
        let nameLength = name.length;
        let fee = 0;

        if (nameLength <= 15) {
            fee = Number(input[index]);
            index++;
        } else {
            fee = budget * 0.20;
        }

        budget -= fee;

        if (budget < 0) {
            console.log(`We need ${Math.abs(budget).toFixed(2)} leva for our actors.`);
            break;
        }

        command = input[index];
        index++;
    }

    if (command === "ACTION") {
        console.log(`We are left with ${budget.toFixed(2)} leva.`);
    }

}
movieStars(["90000", "Christian Bale", "70000.50", "Leonard DiCaprio", "Kevin Spacey", "24000.99"]);
movieStars(["170000", "Ben Affleck", "40000.50", "Zahari Baharov", "80000", "Tom Hanks", "2000.99", "ACTION"]);
