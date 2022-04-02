function truckDriver(input) {

    let season = input[0];
    let kilometersPerMonth = Number(input[1]);

    let kilometerPrice = 0;

    if (kilometersPerMonth <= 5000) {
        switch (season) {
            case "Spring":
            case "Autumn": kilometerPrice = 0.75; break;
            case "Summer": kilometerPrice = 0.90; break;
            case "Winter": kilometerPrice = 1.05; break;
        }
    } else if (kilometersPerMonth > 5000 && kilometersPerMonth <= 10000) {
        switch (season) {
            case "Spring":
            case "Autumn": kilometerPrice = 0.95; break;
            case "Summer": kilometerPrice = 1.10; break;
            case "Winter": kilometerPrice = 1.25; break;
        }
    } else if (kilometersPerMonth > 10000 && kilometersPerMonth <= 20000) {
        switch (season) {
            case "Spring":
            case "Autumn":
            case "Summer":
            case "Winter": kilometerPrice = 1.45; break;
        }
    }
    let monthlySalary = kilometersPerMonth * kilometerPrice;
    let seasonSalary = monthlySalary * 4;
    let seasonSalaryAfterTaxes = seasonSalary * 0.90;

    console.log(seasonSalaryAfterTaxes.toFixed(2));
}
truckDriver(["Summer", "3455"]);
truckDriver(["Winter", "4350"]);
truckDriver(["Spring", "1600"]);
truckDriver(["Winter", "5678"]);
truckDriver(["Autumn", "8600"]);
truckDriver(["Winter", "16042"]);
truckDriver(["Spring", "16942"]);