function cinema(input) {

    let projectionType = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    let sum = rows * columns;
    let money = 0;

    switch (projectionType) {
        case "Premiere":
            money = sum * 12; break;
        case "Normal":
            money = sum * 7.50; break;
        case "Discount":
            money = sum * 5; break;
    }
    console.log(`${money.toFixed(2)} leva`);
}
cinema(["Premiere", "10", "12"]);
cinema(["Normal", "21", "13"]);
cinema(["Discount", "12", "30"]);