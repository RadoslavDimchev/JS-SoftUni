function carNumber(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);

    let carNum = "";

    for (let first = start; first <= end; first++) {
        for (let second = start; second <= end; second++) {
            for (let third = start; third <= end; third++) {
                for (let fourth = start; fourth <= end; fourth++) {
                    if (first > fourth) {
                        if ((second + third) % 2 === 0) {
                            if (first % 2 === 0 && fourth % 2 === 1) {
                                carNum += `${first}${second}${third}${fourth} `;
                            } else if (first % 2 === 1 && fourth % 2 === 0) {
                                carNum += `${first}${second}${third}${fourth} `;
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(carNum);

}
carNumber(["2", "3"]);
carNumber(["3", "5"]);
carNumber(["5", "8"]);
