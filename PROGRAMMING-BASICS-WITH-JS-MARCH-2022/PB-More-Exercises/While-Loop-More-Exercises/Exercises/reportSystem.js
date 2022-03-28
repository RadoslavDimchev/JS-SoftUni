function reportSystem(input) {

    let expectedSum = Number(input[0]);

    let index = 1;
    let command = input[index];

    let cashSum = 0;
    let cardSum = 0;

    let cashPay = 0;
    let cardPay = 0;

    while (command !== "End") {

        let cash = Number(command);
        let card = Number(input[index + 1]);

        if (cash > 100) {
            console.log(`Error in transaction!`);
        } else {
            cashPay++;
            cashSum += cash;
            console.log(`Product sold!`);
        }

        if (card < 10) {
            console.log(`Error in transaction!`);
        } else {
            cardPay++;
            cardSum += card;
            console.log(`Product sold!`);
        }

        let totalSum = cashSum + cardSum;

        if (totalSum >= expectedSum) {
            console.log(`Average CS: ${(cashSum / cashPay).toFixed(2)}`);
            console.log(`Average CC: ${(cardSum / cardPay).toFixed(2)}`);
            break;
        }

        index += 2;
        command = input[index];
    }

    if (command === "End") {
        console.log(`Failed to collect required money for charity.`);
    }

}
reportSystem(["500", "120", "8", "63", "256", "78", "317"]);
reportSystem(["600", "86", "150", "98", "227", "End"]);
