function building(input) {

    let floors = Number(input[0]);
    let rooms = Number(input[1]);

    for (let i = floors; i > 0; i--) {
        let buff = "";

        for (let j = 0; j < rooms; j++) {

            if (i === floors) {
                buff += "L" + i + j + " ";
            } else if (i % 2 === 0) {
                buff += "O" + i + j + " ";
            } else {
                buff += "A" + i + j + " ";
            }
        }

        console.log(buff);
    }
}
building(["6", "4"]);
building(["9", "5"]);
building(["4", "4"]);
