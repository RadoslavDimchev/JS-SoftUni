function challengeTheWedding(input) {

    let men = Number(input[0]);
    let women = Number(input[1]);
    let maxTables = Number(input[2]);

    let tablesCounter = 0;
    let end = false;
    let buff = "";

    for (let i = 1; i <= men; i++) {
        if (end) {
            break;
        }
        for (let j = 1; j <= women; j++) {
            tablesCounter++;
            if (tablesCounter > maxTables) {
                end = true;
                break;
            }
            buff += `(${i} <-> ${j}) `;
        }
    }
    console.log(buff);

}
challengeTheWedding(["2", "2", "6"]);
challengeTheWedding(["2", "2", "3"]);
challengeTheWedding(["5", "8", "40"]);
