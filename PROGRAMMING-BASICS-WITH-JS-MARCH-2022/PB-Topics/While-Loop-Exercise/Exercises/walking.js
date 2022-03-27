function walking(input) {

    let stepsGoal = 10000;

    let index = 0;
    let command = input[index];

    let sumSteps = 0;

    while (command !== "Going home") {
        let steps = Number(command);
        sumSteps += steps;

        if (sumSteps >= stepsGoal) {
            console.log(`Goal reached! Good job!`);
            console.log(`${sumSteps - stepsGoal} steps over the goal!`);
            break;
        }
        index++;
        command = input[index];
    }

    if (command === "Going home") {
        let stepsToHome = Number(input[index + 1]);
        sumSteps += stepsToHome;
        if (sumSteps >= stepsGoal) {
            console.log(`Goal reached! Good job!`);
            console.log(`${sumSteps - stepsGoal} steps over the goal!`);
        } else {
            console.log(`${stepsGoal - sumSteps} more steps to reach goal.`);
        }
    }

}
walking(["1000", "1500", "2000", "6500"]);
walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
walking(["1500", "300", "2500", "3000", "Going home", "200"]);
walking(["125", "250", "4000", "30", "2678", "4682"]);
