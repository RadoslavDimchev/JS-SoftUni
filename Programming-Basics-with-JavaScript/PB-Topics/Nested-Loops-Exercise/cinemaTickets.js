function cinemaTickets(input) {

    let index = 0;
    let command = input[index];

    let studentTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;
    let totalTickets = 0;

    while (command !== "Finish") {
        let filmName = command;
        index++;
        let freePlaces = Number(input[index]);
        index++;
        let ticketsCounter = 0;
        let ticketType = input[index];

        while (ticketType !== "End") {
            ticketsCounter++;
            switch (ticketType) {
                case "student":
                    studentTickets++;
                    break;
                case "standard":
                    standardTickets++
                    break;
                case "kid":
                    kidTickets++;
                    break;
            }
            if (ticketsCounter >= freePlaces) {
                break;
            }
            index++;
            ticketType = input[index];
        }
        totalTickets += ticketsCounter;
        let percentHall = ticketsCounter / freePlaces * 100;

        console.log(`${filmName} - ${percentHall.toFixed(2)}% full.`);

        index++;
        command = input[index];
    }
    let studentPercent = studentTickets / totalTickets * 100;
    let standardPercent = standardTickets / totalTickets * 100;
    let kidPercent = kidTickets / totalTickets * 100;

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(studentPercent.toFixed(2))}% student tickets.`);
    console.log(`${(standardPercent.toFixed(2))}% standard tickets.`);
    console.log(`${(kidPercent.toFixed(2))}% kids tickets.`);

}
cinemaTickets(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"]);
cinemaTickets(["The Matrix", "20", "student", "standard", "kid", "kid", "student", "student", "standard", "student", "End", "The Green Mile", "17", "student", "standard", "standard", "student", "standard", "student", "End", "Amadeus", "3", "standard", "standard", "standard", "Finish"]);
