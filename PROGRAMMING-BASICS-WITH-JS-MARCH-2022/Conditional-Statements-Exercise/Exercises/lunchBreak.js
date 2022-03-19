function lunchBreak(input) {

    let name = input[0];
    let episodeDuration = Number(input[1]);
    let restDuration = Number(input[2]);

    let lunchTime = restDuration / 8;
    let relaxTime = restDuration / 4;
    let leftTime = restDuration - lunchTime - relaxTime;

    if(leftTime >= episodeDuration) {
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(leftTime - episodeDuration)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(episodeDuration - leftTime)} more minutes.`)
    }
}
lunchBreak(["Game of Thrones", "60", "96"]);
lunchBreak(["Teen Wolf", "48", "60"]);