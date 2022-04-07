function foodForPets(input) {

    let days = Number(input[0]);
    let foodQuantity = Number(input[1]);

    let dogFood = 0;
    let catFood = 0;
    let dogFoodTotal = 0;
    let catFoodTotal = 0;
    let biscuits = 0;
    let index = 2;

    for (let i = 1; i <= days; i++) {
        dogFood = Number(input[index++]);
        catFood = Number(input[index++]);

        dogFoodTotal += dogFood;
        catFoodTotal += catFood;

        if (i % 3 === 0) {
            biscuits += (dogFood + catFood) * 0.10;
        }
    }

    let eatenFood = dogFoodTotal + catFoodTotal;
    let eatenFoodP = eatenFood / foodQuantity * 100;
    let pDogFoodTotal = dogFoodTotal / eatenFood * 100;
    let pCatFoodTotal = catFoodTotal / eatenFood * 100;

    console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`);
    console.log(`${eatenFoodP.toFixed(2)}% of the food has been eaten.`);
    console.log(`${pDogFoodTotal.toFixed(2)}% eaten from the dog.`);
    console.log(`${pCatFoodTotal.toFixed(2)}% eaten from the cat.`);

}
foodForPets(["3", "1000", "300", "20", "100", "30", "110", "40"]);
foodForPets(["3", "500", "100", "30", "110", "25", "120", "35"]);
