function cinemaTicket(input) {

    let dayFromWeek = input[0];
    let price = 0;

    switch (dayFromWeek) {
        case "Monday": price = 12; break;
        case "Tuesday": price = 12; break;
        case "Wednesday": price = 14; break;
        case "Thursday": price = 14; break;
        case "Friday": price = 12; break;
        case "Saturday": price = 16; break;
        case "Sunday": price = 16; break;

    }
    console.log(price);
}
cinemaTicket(["Monday"]);
cinemaTicket(["Friday"]);
cinemaTicket(["Sunday"]);