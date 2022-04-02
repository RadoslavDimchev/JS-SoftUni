function newHouse(input) {

    let flowersType = input[0];
    let flowersCount = Number(input[1]);
    let budget = Number(input[2]);

    let sum = 0;

    switch (flowersType) {

        case "Roses":
            sum = flowersCount * 5;
            if (flowersCount > 80) {
                sum *= 0.90;
            } break;
        case "Dahlias":
            sum = flowersCount * 3.80;
            if (flowersCount > 90) {
                sum *= 0.85;
            } break;
        case "Tulips":
            sum = flowersCount * 2.80;
            if (flowersCount > 80) {
                sum *= 0.85;
            } break;
        case "Narcissus":
            sum = flowersCount * 3;
            if (flowersCount < 120) {
                sum *= 1.15;
            } break;
        case "Gladiolus":
            sum = flowersCount * 2.50;
            if (flowersCount < 80) {
                sum *= 1.20;
            } break;
    }

    let remainingMoney = budget - sum;
    let neededMoney = sum - budget;

    if (budget >= sum) {
        console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${remainingMoney.toFixed(2)} leva left.`);
    } else if (budget < sum) {
        console.log(`Not enough money, you need ${neededMoney.toFixed(2)} leva more.`);
    }
}
newHouse(["Roses", "55", "250"]);
newHouse(["Tulips", "88", "260"]);
newHouse(["Narcissus", "119", "360"]);