function timePlus15Minutes(input) {

    let hours = Number(input[0]);
    let mins = Number(input[1]) + 15;

    if (mins > 59) {
        mins = mins - 60;
        hours = hours + 1;
    }

    if (hours > 23) {
        hours = hours - 24;
    }

    if (mins < 10) {
        console.log(`${hours}:0${mins}`);
    } else {
        console.log(`${hours}:${mins}`);
    }
}

timePlus15Minutes(["1", "46"]);
timePlus15Minutes(["0", "01"]);
timePlus15Minutes(["23", "59"]);
timePlus15Minutes(["11", "08"]);
timePlus15Minutes(["12", "49"]);