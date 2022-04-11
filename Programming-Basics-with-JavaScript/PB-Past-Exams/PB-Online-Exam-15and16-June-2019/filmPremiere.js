function filmPremiere(input) {

    let film = input[0];
    let package = input[1];
    let tickets = Number(input[2]);
    let price = 0;

    switch (film) {
        case "John Wick":
            switch (package) {
                case "Drink":
                    price = 12 * tickets;
                    break;
                case "Popcorn":
                    price = 15 * tickets;
                    break;
                case "Menu":
                    price = 19 * tickets;
                    break;
            }
            break;
        case "Star Wars":
            switch (package) {
                case "Drink":
                    price = 18 * tickets;
                    break;
                case "Popcorn":
                    price = 25 * tickets;
                    break;
                case "Menu":
                    price = 30 * tickets;
                    break;
            }
            break;
        case "Jumanji":
            switch (package) {
                case "Drink":
                    price = 9 * tickets;
                    break;
                case "Popcorn":
                    price = 11 * tickets;
                    break;
                case "Menu":
                    price = 14 * tickets;
                    break;
            }
            break;
    }

    if (film === "Star Wars" && tickets >= 4) {
        price *= 0.70;
    } else if (film === "Jumanji" && tickets === 2) {
        price *= 0.85;
    }

    console.log(`Your bill is ${price.toFixed(2)} leva.`);

}
filmPremiere(["John Wick", "Drink", "6"]);
filmPremiere(["Star Wars", "Popcorn", "4"]);
filmPremiere(["Jumanji", "Menu", "2"]);
