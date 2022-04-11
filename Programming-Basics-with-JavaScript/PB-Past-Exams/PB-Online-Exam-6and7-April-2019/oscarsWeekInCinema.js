function oscarsWeekInCinema(input) {

    let movie = input[0];
    let hallType = input[1];
    let tickets = Number(input[2]);
    let profit = 0;

    switch (movie) {
        case "A Star Is Born":
            switch (hallType) {
                case "normal":
                    profit = 7.50;
                    break;
                case "luxury":
                    profit = 10.50;
                    break;
                case "ultra luxury":
                    profit = 13.50;
                    break;
            }
            break;
        case "Bohemian Rhapsody":
            switch (hallType) {
                case "normal":
                    profit = 7.35;
                    break;
                case "luxury":
                    profit = 9.45;
                    break;
                case "ultra luxury":
                    profit = 12.75;
                    break;
            }
            break;
        case "Green Book":
            switch (hallType) {
                case "normal":
                    profit = 8.15;
                    break;
                case "luxury":
                    profit = 10.25;
                    break;
                case "ultra luxury":
                    profit = 13.25;
                    break;
            }
            break;
        case "The Favourite":
            switch (hallType) {
                case "normal":
                    profit = 8.75;
                    break;
                case "luxury":
                    profit = 11.55;
                    break;
                case "ultra luxury":
                    profit = 13.95;
                    break;
            }
            break;
    }

    profit *= tickets;

    console.log(`${movie} -> ${profit.toFixed(2)} lv.`);

}
oscarsWeekInCinema(["A Star Is Born", "luxury", "42"]);
oscarsWeekInCinema(["Green Book", "normal", "63"]);
