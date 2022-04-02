function cake(input) {

    let width = Number(input[0]);
    let length = Number(input[1]);
    let pieces = width * length;
    let takenPieces = 0;

    let index = 2;
    let command = input[index];
    index++;

    while (command !== "STOP") {
        takenPieces += Number(command);
        totalTakenPieces = pieces - takenPieces;


        if (takenPieces > pieces) {
            console.log(`No more cake left! You need ${takenPieces - pieces} pieces more.`);
            break;
        }
        command = input[index];
        index++;

    }
    if (command === "STOP") {

        console.log(`${totalTakenPieces} pieces are left.`)
    }

}
cake(["10", "10", "20", "20", "20", "20", "21"]);
cake(["10", "2", "2", "4", "6", "STOP"]);
