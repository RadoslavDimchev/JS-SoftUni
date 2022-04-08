function gameNumberWars(input) {

    let index = 0
    let firstPlayer = input[index++];
    let secondPlayer = input[index++];
    let command = input[index];
    let totalFirst = 0;
    let totalSecond = 0;

    while (command !== "End of game") {
        let firstPoints = Number(input[index++]);
        let secondPoints = Number(input[index++]);

        if (firstPoints > secondPoints) {
            totalFirst += firstPoints - secondPoints;

        } else if (secondPoints > firstPoints) {
            totalSecond += secondPoints - firstPoints;

        } else if (firstPoints === secondPoints) {
            console.log(`Number wars!`);
            firstPoints = Number(input[index]);
            index++;
            secondPoints = Number(input[index]);

            if (firstPoints > secondPoints) {
                console.log(`${firstPlayer} is winner with ${totalFirst} points`);
                break;
            } else if (secondPoints > firstPoints) {
                console.log(`${secondPlayer} is winner with ${totalSecond} points`);
                break;
            }
        }
        command = input[index];
    }

    if (command === "End of game") {
        console.log(`${firstPlayer} has ${totalFirst} points`);
        console.log(`${secondPlayer} has ${totalSecond} points`);
    }

}
gameNumberWars(["Desi", "Niki", "7", "5", "3", "4", "3", "3", "5", "3"]);
gameNumberWars(["Elena", "Simeon", "6", "3", "2", "5", "8", "9", "End of game"]);
