function depositCalculator(input) {

    let depositPrice = Number(input[0]);
    let depositTerm = Number(input[1]);
    let annualInterestRate = Number(input[2]);

    let sum = depositPrice + depositTerm * ((depositPrice * annualInterestRate / 100) / 12);
    console.log(sum);

}
depositCalculator(["200", "3", "5.7"]);