function carToGo(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let typeClass;
    let car;

    if (budget <= 100) {
        typeClass = "Economy class";
        switch (season) {
            case "Summer":
                car = "Cabrio";
                budget *= 0.35; break;
            case "Winter":
                car = "Jeep";
                budget *= 0.65; break;
        }
    } else if (budget > 100 && budget <= 500) {
        typeClass = "Compact class";
        switch (season) {
            case "Summer":
                car = "Cabrio";
                budget *= 0.45; break;
            case "Winter":
                car = "Jeep";
                budget *= 0.80; break;
        }
    } else if (budget > 500) {
        typeClass = "Luxury class";
        switch (season) {
            case "Summer":
            case "Winter":
                car = "Jeep";
                budget *= 0.90; break;
        }
    }
    console.log(typeClass);
    console.log(`${car} - ${budget.toFixed(2)}`);
}
carToGo(["450", "Summer"]);
carToGo(["450", "Winter"]);
carToGo(["1010", "Summer"]);
carToGo(["99.99", "Summer"]);
carToGo(["1010", "Winter"]);
carToGo(["70.50", "Winter"]);