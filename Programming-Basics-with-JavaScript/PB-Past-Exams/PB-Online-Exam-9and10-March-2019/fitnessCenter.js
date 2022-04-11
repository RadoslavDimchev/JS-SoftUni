function fitnessCenter(input) {

    let visitors = Number(input[0]);

    let back = 0;
    let chest = 0;
    let legs = 0;
    let abs = 0;
    let proteinShake = 0;
    let proteinBar = 0;
    let workOut = 0;
    let protein = 0;

    for (let i = 1; i <= visitors; i++) {
        let activity = input[i];
        switch (activity) {
            case "Back":
                back++;
                workOut++;
                break;
            case "Chest":
                chest++;
                workOut++;
                break;
            case "Legs":
                legs++;
                workOut++;
                break;
            case "Abs":
                abs++;
                workOut++;
                break;
            case "Protein shake":
                proteinShake++;
                protein++;
                break;
            case "Protein bar":
                proteinBar++;
                protein++;
                break;
        }
    }
    let percentWorkOut = workOut / visitors * 100;
    let percentProtein = protein / visitors * 100;

    console.log(`${back} - back`);
    console.log(`${chest} - chest`);
    console.log(`${legs} - legs`);
    console.log(`${abs} - abs`);
    console.log(`${proteinShake} - protein shake`);
    console.log(`${proteinBar} - protein bar`);
    console.log(`${percentWorkOut.toFixed(2)}% - work out`);
    console.log(`${percentProtein.toFixed(2)}% - protein`);

}
fitnessCenter(["10", "Back", "Chest", "Legs", "Abs", "Protein shake", "Protein bar", "Protein shake", "Protein bar", "Legs", "Abs"]);
fitnessCenter(["7", "Chest", "Back", "Legs", "Legs", "Abs", "Protein shake", "Protein bar"]);
