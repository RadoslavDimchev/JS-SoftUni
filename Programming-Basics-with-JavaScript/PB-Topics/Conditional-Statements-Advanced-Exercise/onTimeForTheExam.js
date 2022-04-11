function onTimeForTheExam(input) {

    let hourExam = Number(input[0]);
    let minExam = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMin = Number(input[3]);

    let totalMinExam = hourExam * 60 + minExam;
    let totalArrivalMin = arrivalHour * 60 + arrivalMin;

    let difference = Math.abs(totalArrivalMin - totalMinExam);
    let hourDiff = Math.floor(difference / 60);
    let minDiff = difference % 60;

    if (minDiff === 0 || (minDiff < 10 && hourDiff > 0)) {
        minDiff = `0${minDiff}`;
    }

    if (totalMinExam < totalArrivalMin && difference < 60) {
        console.log("Late");
        console.log(`${minDiff} minutes after the start`);
    } else if (totalMinExam < totalArrivalMin && difference >= 60) {
        console.log("Late");
        console.log(`${hourDiff}:${minDiff} hours after the start`);
    } else if (totalMinExam === totalArrivalMin) {
        console.log("On time");
    } else if (difference <= 30) {
        console.log("On time");
        console.log(`${minDiff} minutes before the start`);
    } else if (difference > 30 && difference < 60) {
        console.log("Early");
        console.log(`${minDiff} minutes before the start`);
    } else if (difference >= 60) {
        console.log("Early");
        console.log(`${hourDiff}:${minDiff} hours before the start`);
    }
}
onTimeForTheExam(["9", "30", "9", "50"]);
onTimeForTheExam(["9", "00", "8", "30"]);
onTimeForTheExam(["16", "00", "15", "00"]);
onTimeForTheExam(["9", "00", "10", "30"]);
onTimeForTheExam(["14", "00", "13", "55"]);
onTimeForTheExam(["11", "30", "8", "12"]);
onTimeForTheExam(["10", "00", "10", "00"]);
onTimeForTheExam(["11", "30", "10", "55"]);
onTimeForTheExam(["11", "30", "12", "29"]);