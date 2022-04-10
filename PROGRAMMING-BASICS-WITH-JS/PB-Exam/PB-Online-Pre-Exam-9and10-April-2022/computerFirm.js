function computerFirm(input) {

    let index = 0;
    let n = Number(input[index]);
    index++;
    let ratings = 0;
    let totalSales = 0;

    for (let i = 0; i < n; i++) {
        let number = input[index];
        index++;
        let rating = Number(number[2]);
        let sales = Number(number[0] + number[1]);
        ratings += rating;

        switch (rating) {
            case 2:
                sales *= 0;
                break;
            case 3:
                sales *= 0.50;
                break;
            case 4:
                sales *= 0.70;
                break;
            case 5:
                sales *= 0.85;
                break;
            case 6:
                sales *= 1;
                break;
        }

        totalSales += sales;
    }

    console.log(totalSales.toFixed(2));
    console.log((ratings / n).toFixed(2));

}
computerFirm(["3", "103", "103", "103"]);
computerFirm(["5", "122", "156", "202", "214", "185"]);
