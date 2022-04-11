function happyCatParking(input) {

    let days = Number(input[0]);
    let hoursAtDay = Number(input[1]);
    let total = 0;

    for (let i = 1; i <= days; i++) {
        let totalForDay = 0;
        for (let j = 1; j <= hoursAtDay; j++) {
            if (i % 2 === 0 && j % 2 === 1) {
                totalForDay += 2.50;
            } else if (i % 2 === 1 && j % 2 === 0) {
                totalForDay += 1.25;
            } else {
                totalForDay += 1;
            }
        }
        total += totalForDay;
        console.log(`Day: ${i} - ${totalForDay.toFixed(2)} leva`);
    }
    console.log(`Total: ${total.toFixed(2)} leva`);

}
happyCatParking(["2", "5"]);
happyCatParking(["5", "2"]);
