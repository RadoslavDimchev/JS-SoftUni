function balls(input) {

    let ballsCount = Number(input[0]);

    let points = 0;

    let totalPoints = 0;
    let redBalls = 0;
    let orangeBalls = 0;
    let yellowBalls = 0;
    let whiteBalls = 0;
    let otherColorBalls = 0;
    let dividesFromBlack = 0;

    for (let i = 1; i <= ballsCount; i++) {

        let color = input[i];

        switch (color) {
            case "red":
                points = 5;
                totalPoints += points;
                redBalls++;
                break;
            case "orange":
                points = 10;
                totalPoints += points;
                orangeBalls++;
                break;
            case "yellow":
                points = 15;
                totalPoints += points;
                yellowBalls++;
                break;
            case "white":
                points = 20;
                totalPoints += points;
                whiteBalls++;
                break;
            case "black":
                totalPoints = Math.floor(totalPoints / 2);
                dividesFromBlack++;
                break;
            default:
                otherColorBalls++;
                break;
        }

    }

    console.log(`Total points: ${totalPoints}`);
    console.log(`Red balls: ${redBalls}`);
    console.log(`Orange balls: ${orangeBalls}`);
    console.log(`Yellow balls: ${yellowBalls}`);
    console.log(`White balls: ${whiteBalls}`);
    console.log(`Other colors picked: ${otherColorBalls}`);
    console.log(`Divides from black balls: ${dividesFromBlack}`);

}
balls(["3", "white", "black", "pink"]);
balls(["5", "red", "red", "ddd", "ddd", "ddd"]);
