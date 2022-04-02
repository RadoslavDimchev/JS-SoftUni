function accountBalance(input) {

    let index = 0;

    let deposit = input[index];
    index++;
    let balance = 0;

    while (deposit !== "NoMoreMoney") {
        let money = Number(deposit);
        
        if (money < 0) {
            console.log("Invalid operation!");
            break;
        }
        balance += money;
        console.log(`Increase: ${money.toFixed(2)}`);

        deposit = input[index];
        index++
    }

    console.log(`Total: ${balance.toFixed(2)}`);

}
accountBalance(["5.51", "69.42", "100", "NoMoreMoney"]);
accountBalance(["120", "45.55", "-150"]);
