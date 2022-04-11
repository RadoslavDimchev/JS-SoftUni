function cinemaTickets(input) {

    let index = 0;
    let command = input[index];

    let students = 0;
    let standards = 0;
    let kids = 0;
    let totalTickets = 0;

    while (command !== "Finish") {
        let movie = command;
        index++;
        let freeSeats = Number(input[index]);
        index++;
        let ticketType = input[index];
        index++;
        let ticketsCount = 0;

        while (ticketType !== "End") {
            ticketsCount++;

            switch (ticketType) {
                case "student":
                    students++;
                    break;
                case "standard":
                    standards++;
                    break;
                case "kid":
                    kids++;
                    break;
            }

            if (freeSeats === ticketsCount) {
                break;
            }

            ticketType = input[index];
            index++;
        }
        totalTickets += ticketsCount;
        console.log(`${movie} - ${(ticketsCount / freeSeats * 100).toFixed(2)}% full.`);

        command = input[index];
    }

    let studentsP = students / totalTickets * 100;
    let standardsP = standards / totalTickets * 100;
    let kidsP = kids / totalTickets * 100;

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${studentsP.toFixed(2)}% student tickets.`);
    console.log(`${standardsP.toFixed(2)}% standard tickets.`);
    console.log(`${kidsP.toFixed(2)}% kids tickets.`);

}
cinemaTickets(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"]);
cinemaTickets(["The Matrix", "20", "student", "standard", "kid", "kid", "student", "student", "standard", "student", "End", "The Green Mile", "17", "student", "standard", "standard", "student", "standard", "student", "End", "Amadeus", "3", "standard", "standard", "standard", "Finish"]);
