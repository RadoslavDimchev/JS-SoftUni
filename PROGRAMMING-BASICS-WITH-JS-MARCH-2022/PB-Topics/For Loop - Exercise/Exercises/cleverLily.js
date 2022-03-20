function cleverLily(input) {

    let lilyAge = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let toysCount = 0;
    let savedMoney = 0;
    let addedMoney = 10;
    let stolenMoney = 0;

    for (let i = 1; i <= lilyAge; i++) {

        if (i % 2 === 1) {
            toysCount++;
        } else {
            stolenMoney++;
            savedMoney += addedMoney;
            addedMoney += 10;
        }
    }

    let moneyFromToys = toyPrice * toysCount;
    let totalSavedMoney = (savedMoney + moneyFromToys) - stolenMoney;

    let remainingMoney = totalSavedMoney - washingMachinePrice;
    let neededMoney = washingMachinePrice - totalSavedMoney;

    if (totalSavedMoney >= washingMachinePrice) {
        console.log(`Yes! ${remainingMoney.toFixed(2)}`);
    } else {
        console.log(`No! ${neededMoney.toFixed(2)}`);
    }
}
cleverLily(["10", "170.00", "6"]);
cleverLily(["21", "1570.98", "3"]);