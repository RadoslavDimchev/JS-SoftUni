function gymnastics(input) {

    let country = input[0];
    let instrument = input[1];
    let totalGrade = 0;

    switch (country) {
        case "Russia":
            if (instrument === "ribbon") {
                totalGrade = 9.100 + 9.400;
            } else if (instrument === "hoop") {
                totalGrade = 9.300 + 9.800;
            } else if (instrument === "rope") {
                totalGrade = 9.600 + 9.000;
            }
            break;
        case "Bulgaria":
            if (instrument === "ribbon") {
                totalGrade = 9.600 + 9.400;
            } else if (instrument === "hoop") {
                totalGrade = 9.550 + 9.750;
            } else if (instrument === "rope") {
                totalGrade = 9.500 + 9.400;
            }
            break;
        case "Italy":
            if (instrument === "ribbon") {
                totalGrade = 9.200 + 9.500;
            } else if (instrument === "hoop") {
                totalGrade = 9.450 + 9.350;
            } else if (instrument === "rope") {
                totalGrade = 9.700 + 9.150;
            }
            break;
    }
    let percentageToMax = 0;

    if (totalGrade < 20) {
        percentageToMax = (20 - totalGrade) / 20 * 100;
    }

    console.log(`The team of ${country} get ${totalGrade.toFixed(3)} on ${instrument}.`);
    console.log(`${percentageToMax.toFixed(2)}%`);

}
gymnastics(["Bulgaria", "ribbon"]);
gymnastics(["Russia", "rope"]);
