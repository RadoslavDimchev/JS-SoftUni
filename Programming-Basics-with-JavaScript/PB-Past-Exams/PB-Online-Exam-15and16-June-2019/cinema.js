function cinema(input) {

    let index = 0;
    let hallCapacity = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let income = 0;

    while (command !== "Movie time!") {
        let enteringPeople = Number(command);

        if (enteringPeople > hallCapacity) {
            console.log(`The cinema is full.`);
            break;
        }

        hallCapacity -= enteringPeople;

        income += enteringPeople * 5;

        if (enteringPeople % 3 === 0) {
            income -= 5;
        }

        command = input[index];
        index++;
    }

    if (command === "Movie time!") {
        console.log(`There are ${hallCapacity} seats left in the cinema.`);
    }

    console.log(`Cinema income - ${income} lv.`);

}
cinema(["60", "10", "6", "3", "20", "15", "Movie time!"]);
cinema(["50", "15", "10", "10", "15", "5"]);
