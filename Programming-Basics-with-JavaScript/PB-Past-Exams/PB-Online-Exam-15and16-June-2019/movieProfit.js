function movieProfit(input) {

    let movieName = input[0];
    let days = Number(input[1]);
    let tickets = Number(input[2]);
    let ticketPrice = Number(input[3]);
    let percentCinema = Number(input[4]);

    let dayProfit = tickets * ticketPrice;
    let daysProfit = dayProfit * days;
    let totalProfit = daysProfit - daysProfit * percentCinema / 100;

    console.log(`The profit from the movie ${movieName} is ${totalProfit.toFixed(2)} lv.`);

}
movieProfit(["The Programmer", "20", "500", "7.50", "7"]);
movieProfit(["Python Basics", "40", "34785", "10.45", "14"]);
