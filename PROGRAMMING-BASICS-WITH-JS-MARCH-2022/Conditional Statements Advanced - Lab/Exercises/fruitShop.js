function fruitShop(input) {

    let fruit = input[0];
    let dayFromWeek = input[1];
    let quantity = Number(input[2]);

    let price = 0;

    if (dayFromWeek === "Monday" || dayFromWeek === "Tuesday" || dayFromWeek === "Wednesday" ||
        dayFromWeek === "Thursday" || dayFromWeek === "Friday") {

        switch (fruit) {
            case "banana": price = (quantity * 2.50); break;
            case "apple": price = (quantity * 1.20); break;
            case "orange": price = (quantity * 0.85); break;
            case "grapefruit": price = (quantity * 1.45); break;
            case "kiwi": price = (quantity * 2.70); break;
            case "pineapple": price = (quantity * 5.50); break;
            case "grapes": price = (quantity * 3.85); break;
            default: console.log("error"); break;
        }
    } else if (dayFromWeek === "Saturday" || dayFromWeek === "Sunday") {

        switch (fruit) {
            case "banana": price = (quantity * 2.70); break;
            case "apple": price = (quantity * 1.25); break;
            case "orange": price = (quantity * 0.90); break;
            case "grapefruit": price = (quantity * 1.60); break;
            case "kiwi": price = (quantity * 3); break;
            case "pineapple": price = (quantity * 5.60); break;
            case "grapes": price = (quantity * 4.20); break;
            default: console.log("error"); break;
        }
    } else {
        console.log("error");
    }
    if (price > 0) {
        console.log(price.toFixed(2));
    }
}
fruitShop(["apple", "Tuesday", "2"]);
fruitShop(["orange", "Sunday", "3"]);
fruitShop(["kiwi", "Monday", "2.5"]);
fruitShop(["grapes", "Saturday", "0.5"]);
fruitShop(["tomato", "Monday", "0.5"]);