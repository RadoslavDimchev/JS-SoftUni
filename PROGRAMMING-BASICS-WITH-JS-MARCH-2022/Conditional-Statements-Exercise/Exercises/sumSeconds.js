function sumSecond(input) {

    let timeFirst = Number(input[0]);
    let timeSecond = Number(input[1]);
    let timeThird = Number(input[2]);

    let totalTime = timeFirst + timeSecond + timeThird;

    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`)
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}

sumSecond(["35", "45", "44"]);
sumSecond(["22", "7", "34"]);
sumSecond(["50", "50", "49"]);
sumSecond(["14", "12", "10"]);