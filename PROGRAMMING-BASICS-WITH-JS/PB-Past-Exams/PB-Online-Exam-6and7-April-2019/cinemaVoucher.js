function cinemaVoucher(input) {

    let index = 0;
    let voucher = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let tickets = 0;
    let others = 0;
    let price = 0;

    while (command !== "End") {
        let purchase = command;
        let purchaseL = purchase.length;

        if (purchaseL > 8) {
            price = purchase.charCodeAt(0) + purchase.charCodeAt(1);

            if (price > voucher) {
                break;
            }

            tickets++;
        } else {
            price = purchase.charCodeAt(0);

            if (price > voucher) {
                break;
            }

            others++;
        }

        voucher -= price;

        command = input[index];
        index++;
    }

    console.log(tickets);
    console.log(others);

}
cinemaVoucher(["300", "Captain Marvel", "popcorn", "Pepsi"]);
cinemaVoucher(["1500", "Avengers: Endgame", "Bohemian Rhapsody", "Deadpool 2", "End"]);
