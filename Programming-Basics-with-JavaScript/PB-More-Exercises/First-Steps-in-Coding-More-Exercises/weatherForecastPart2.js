function weatherForecastPart2(input) {

    let degrees = Number(input[0]);
    let res = 0;

    if (degrees < 5) {
        res = "unknown";
    } else if (degrees <= 11.9) {
        res = "Cold";
    } else if (degrees <= 14.9) {
        res = "Cool";
    } else if (degrees <= 20) {
        res = "Mild";
    } else if (degrees <= 25.9) {
        res = "Warm";
    } else if (degrees <= 35) {
        res = "Hot";
    } else {
        res = "unknown"
    }
    console.log(res)
}
weatherForecastPart2(["16.5"]);
weatherForecastPart2(["8"]);
weatherForecastPart2(["22.4"]);
weatherForecastPart2(["26"]);
weatherForecastPart2(["0"]);