function easterDecoration(input) {

    let index = 0;
    let command = input[index];
    let clients = Number(command);
    index++;
    let totalMoney = 0;

    for (let i = 1; i <= clients; i++) {
        let products = 0;
        let price = 0;

        while (command !== "Finish") {
            let product = input[index];

            if (product === "basket") {
                products++;
                price += 1.50;
            } else if (product === "wreath") {
                products++;
                price += 3.80;
            } else if (product === "chocolate bunny") {
                products++;
                price += 7;
            }

            index++;
            command = input[index];
        }

        if (products % 2 === 0) {
            price *= 0.80;
        }
        totalMoney += price;
        console.log(`You purchased ${products} items for ${price.toFixed(2)} leva.`);

        index++;
        command = input[index];
    }
    console.log(`Average bill per client is: ${(totalMoney / clients).toFixed(2)} leva.`);

}
easterDecoration(["2", "basket", "wreath", "chocolate bunny", "Finish", "wreath", "chocolate bunny", "Finish"]);
easterDecoration(["1", "basket", "wreath", "chocolate bunny", "wreath", "basket", "chocolate bunny", "Finish"]);
