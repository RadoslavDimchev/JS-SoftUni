function bills(input) {

    let months = Number(input[0]);

    let electricityBill = 0;
    let waterBill = 20;
    let internetBill = 15;
    let otherBills = 0;

    let eletricityForMonths = 0;
    let waterForMonths = 0;
    let internetForMonths = 0;
    let otherForMonths = 0;

    for (let i = 1; i <= months; i++) {

        electricityBill = Number(input[i]);
        otherBills = (electricityBill + waterBill + internetBill) * 1.20;

        eletricityForMonths += electricityBill;
        waterForMonths += waterBill;
        internetForMonths += internetBill;
        otherForMonths += otherBills;
    }

    let averageMonth = (eletricityForMonths + waterForMonths + internetForMonths + otherForMonths) / months;

    console.log(`Electricity: ${eletricityForMonths.toFixed(2)} lv`);
    console.log(`Water: ${waterForMonths.toFixed(2)} lv`);
    console.log(`Internet: ${internetForMonths.toFixed(2)} lv`);
    console.log(`Other: ${otherForMonths.toFixed(2)} lv`);
    console.log(`Average: ${averageMonth.toFixed(2)} lv`);

}
bills(["5", "68.63", "89.25", "132.53", "93.53", "63.22"]);
bills(["8", "123.54", "231.54", "140.23", "100", "122.4", "430", "178.52", "64.2"]);
