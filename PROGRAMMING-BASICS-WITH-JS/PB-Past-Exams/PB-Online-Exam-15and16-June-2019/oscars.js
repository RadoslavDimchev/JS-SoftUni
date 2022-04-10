function oscars(input) {

    let index = 0;
    let actorName = input[index];
    index++;
    let startPoints = Number(input[index]);
    index++;
    let judgesCount = Number(input[index]);
    index++;

    let points = startPoints;
    let nominee = false;

    for (let i = 0; i < judgesCount; i++) {
        let judgeName = input[index];
        index++;
        let judgePoints = Number(input[index]);
        index++;

        points += (judgeName.length * judgePoints) / 2;

        if (points > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${points.toFixed(1)}!`);
            nominee = true;
            break;
        }

    }

    if (!nominee) {
        console.log(`Sorry, ${actorName} you need ${(1250.5 - points).toFixed(1)} more!`);
    }

}
oscars(["Zahari Baharov", "205", "4", "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"]);
oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"]);
