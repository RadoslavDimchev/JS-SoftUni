function skeleton(input) {

    let mins = Number(input[0]);
    let seconds = Number(input[1]);
    let meters = Number(input[2]);
    let secsFor100M = Number(input[3]);

    let totalSeconds = mins * 60 + seconds;

    let reducedTime = (meters / 120) * 2.5;

    let totalTime = (meters / 100) * secsFor100M - reducedTime;

    let neededSeconds = totalTime - totalSeconds;

    if (totalTime <= totalSeconds) {
        console.log(`Marin Bangiev won an Olympic quota!`);
        console.log(`His time is ${totalTime.toFixed(3)}.`);
    } else if (totalTime > totalSeconds) {
        console.log(`No, Marin failed! He was ${neededSeconds.toFixed(3)} second slower.`);
    }

}
skeleton(["2", "12", "1200", "10"]);
skeleton(["1", "20", "1546", "12"]);