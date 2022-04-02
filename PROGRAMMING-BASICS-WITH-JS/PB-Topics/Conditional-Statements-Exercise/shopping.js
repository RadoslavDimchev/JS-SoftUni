function shopping(input) {

    let budget = Number(input[0]);
    let gpuCount = Number(input[1]);
    let cpuCount = Number(input[2]);
    let ramCount = Number(input[3]);

    let gpuPrice = gpuCount * 250;
    let cpuPrice = gpuPrice * 0.35 * cpuCount;
    let ramPrice = gpuPrice * 0.10 * ramCount;

    let totalPrice = gpuPrice + cpuPrice + ramPrice;

    if (gpuCount > cpuCount) {
        totalPrice *= 0.85;
    }

    if (budget >= totalPrice) {
        console.log(`You have ${(budget - totalPrice).toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva more!`)
    }
}
shopping(["900", "2", "1", "3"]);
shopping(["920.45", "3", "1", "1"]);