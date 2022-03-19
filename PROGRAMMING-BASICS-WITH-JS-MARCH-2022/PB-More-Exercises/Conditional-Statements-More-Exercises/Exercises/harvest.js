function harvest(input) {

    let x = Number(input[0]);
    let y = Number(input[1]);
    let z = Number(input[2]);
    let workers = Number(input[3]);

    let totalGrapes = x * y;
    let wine = (totalGrapes * 0.40) / 2.5;

    let notEnoughWine = z - wine;
    let remainingWine = wine - z;

    let wineForWorkers = remainingWine / workers;

    if (wine < z) {
        console.log(`It will be a tough winter! More ${Math.floor(notEnoughWine)} liters wine needed.`);
    } else {
        console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
        console.log(`${Math.ceil(remainingWine)} liters left -> ${Math.ceil(wineForWorkers)} liters per person.`);
    }
}
harvest([650, 2, 175, 3]);
harvest([1020, 1.5, 425, 4]);

function harvest(input) {

    let x = Number(input[0]);
    let y = Number(input[1]);
    let z = Number(input[2]);
    let workers = Number(input[3]);

    let totalGrapes = x * y;
    let wine = (totalGrapes * 0.40) / 2.5;

    if (wine < z) {
        console.log(`It will be a tough winter! More ${Math.floor(z - wine)} liters wine needed.`);
    } else {
        console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
        console.log(`${Math.ceil(wine - z)} liters left -> ${Math.ceil(wine - z - workers)} liters per person.`);
    }
}
harvest([650, 2, 175, 3]);
harvest([1020, 1.5, 425, 4]);