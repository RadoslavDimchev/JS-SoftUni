function pets(input) {

    let days = Number(input[0]);
    let foodKg = Number(input[1]);
    let dogKgFood = Number(input[2]);
    let catKgFood = Number(input[3]);
    let turtleGFood = Number(input[4]);

    let dogNeededFood = days * dogKgFood;
    let catNeededFood = days * catKgFood;
    let tutrleNeededFood = (days * turtleGFood) / 1000;

    let totalFood = dogNeededFood + catNeededFood + tutrleNeededFood;

    let overKg = foodKg - totalFood;
    let needKg = totalFood - foodKg;

    if (totalFood <= foodKg) {
        console.log(`${Math.floor(overKg)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(needKg)} more kilos of food are needed.`);
    }
}
pets([2, 10, 1, 1, 1200]);
pets([5, 10, 2.1, 0.8, 321]);
