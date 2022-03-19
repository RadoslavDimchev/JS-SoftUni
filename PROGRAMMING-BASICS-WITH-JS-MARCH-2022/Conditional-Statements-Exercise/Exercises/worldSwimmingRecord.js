function worldSwimmingRecord(input) {

    let record = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeForMeter = Number(input[2]);

    let totalSecs = distanceInMeters * timeForMeter;
    let delay = Math.floor(distanceInMeters / 15) * 12.5;
    let totalTime = totalSecs + delay;

    if (totalTime < record) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(totalTime - record).toFixed(2)} seconds slower.`);
    }
}
worldSwimmingRecord(["10464", "1500", "20"]);
worldSwimmingRecord(["55555.67", "3017", "5.03"]);