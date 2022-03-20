function oscars(input) {

    let name = input[0];
    let academyPoints = Number(input[1]);
    let evaluators = Number(input[2]);

    let inputLength = input.length

    for (let i = 3; i < inputLength; i += 2) {
        let currentEvaluator = input[i];
        let currentEvaluatorPoints = Number(input[i + 1]);

        let evaluatorsPoints = (currentEvaluator.length * currentEvaluatorPoints) / 2;
        academyPoints += evaluatorsPoints;

        if (academyPoints > 1250) {
            break;
        }
    }

    if (academyPoints > 1250.5) {
        console.log(`Congratulations, ${name} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
    } else {
        console.log(`Sorry, ${name} you need ${(1250.5 - academyPoints).toFixed(1)} more!`);
    }

}
oscars(["Zahari Baharov", "205", "4", "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"]);
oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"]);