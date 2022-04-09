function fruitMarket(arg1, arg2, arg3, arg4, arg5) {

    let strawberriesP = Number(arg1);
    let bananasQ = Number(arg2);
    let orangesQ = Number(arg3);
    let raspberriesQ = Number(arg4);
    let strawberriesQ = Number(arg5);

    let raspberriesP = strawberriesP / 2;
    let orangesP = raspberriesP * 0.60;
    let bananasP = raspberriesP * 0.20;

    let strawberries = strawberriesP * strawberriesQ;
    let bananas = bananasP * bananasQ;
    let oranges = orangesP * orangesQ;
    let raspberries = raspberriesP * raspberriesQ;

    let neededMoney = strawberries + bananas + oranges + raspberries;
    console.log(neededMoney.toFixed(2));

}
fruitMarket();
