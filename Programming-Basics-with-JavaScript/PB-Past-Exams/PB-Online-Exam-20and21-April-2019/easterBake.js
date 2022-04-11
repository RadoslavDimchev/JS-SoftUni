function easterBake(input) {

    let easterCakes = Number(input[0]);
    let sumSugar = 0;
    let sumflour = 0;
    let maxSugar = 0;
    let maxFlour = 0;

    for (let i = 1; i <= easterCakes * 2; i++) {
        let sugar = Number(input[i]);
        sumSugar += sugar;
        if (sugar > maxSugar) {
            maxSugar = sugar;
        }

        let flour = Number(input[++i]);
        sumflour += flour;
        if (flour > maxFlour) {
            maxFlour = flour;
        }
    }
    let sugarPackages = sumSugar / 950;
    let flourPackages = sumflour / 750;

    console.log(`Sugar: ${Math.ceil(sugarPackages)}`);
    console.log(`Flour: ${Math.ceil(flourPackages)}`);
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`);

}
easterBake(["3", "400", "350", "250", "300", "450", "380"]);
easterBake(["4", "500", "350", "560", "430", "600", "345", "578", "543"]);
