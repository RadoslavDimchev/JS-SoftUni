function mountainRun(input) {

    let record = Number(input[0]);
    let metersDistance = Number(input[1]);
    let secondsPerOneM = Number(input[2]);

    let delay = Math.floor(metersDistance / 50) * 30;
    let timeGeorge = metersDistance * secondsPerOneM + delay;

    if (timeGeorge < record) {
        console.log(`Yes! The new record is ${timeGeorge.toFixed(2)} seconds.`);
    } else {
        let neededSeconds = timeGeorge - record;
        console.log(`No! He was ${neededSeconds.toFixed(2)} seconds slower.`);
    }

}
mountainRun(["10164", "1400", "25"]);
mountainRun(["5554.36", "1340", "3.23"]);
mountainRun(["1377", "389", "3"]);
