function agencyProfit(input) {
    let name = input[0];
    let adultTickets = Number(input[1]);
    let kidTickets = Number(input[2]);
    let adultTicketsPrice = Number(input[3]);
    let taxServicePrice = Number(input[4]);

    let kidTicketsPrice = adultTicketsPrice * 0.30;

    let adultTicketsPriceTaxService = adultTicketsPrice + taxServicePrice;
    let kidTicketsPriceTaxService = kidTicketsPrice + taxServicePrice;

    let ticketsPrice = adultTickets * adultTicketsPriceTaxService + kidTickets * kidTicketsPriceTaxService;
    let finalPrice = ticketsPrice * 0.20;

    console.log(`The profit of your agency from ${name} tickets is ${finalPrice.toFixed(2)} lv.`);

}

agencyProfit(["WizzAir", "15", "5", "120", "40"]);
agencyProfit(["Ryanair", "60", "23", "158.96", "39.12"]);
