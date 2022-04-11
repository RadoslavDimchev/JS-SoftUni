function sleepyTomCat(input) {

    let restDays = Number(input[0])
    let workDays = 365 - restDays;

    let restMinsPlay = restDays * 127;
    let workMinsPlay = workDays * 63;

    let totalMins = restMinsPlay + workMinsPlay;
    let difference = Math.abs(30000 - restMinsPlay - workMinsPlay);

    let hours = Math.floor(difference / 60);
    let mins = difference % 60;

    let res1 = 0;
    let res2 = 0;

    if (totalMins > 30000) {
        res1 = "Tom will run away";
        res2 = `${hours} hours and ${mins} minutes more for play`;
    } else {
        res1 = "Tom sleeps well";
        res2 = `${hours} hours and ${mins} minutes less for play`;
    }

    console.log(res1);
    console.log(res2);
}
sleepyTomCat([20]);
sleepyTomCat([113]);