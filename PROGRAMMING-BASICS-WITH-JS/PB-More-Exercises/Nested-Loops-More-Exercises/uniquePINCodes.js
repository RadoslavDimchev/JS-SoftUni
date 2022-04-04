function uniquePINCodes(input) {

    let firstBorder = Number(input[0]);
    let secondBorder = Number(input[1]);
    let thirdBorder = Number(input[2]);

    for (let numOne = 2; numOne <= firstBorder; numOne += 2) {
        for (let numTwo = 2; numTwo <= secondBorder; numTwo++) {
            for (let numThree = 2; numThree <= thirdBorder; numThree += 2) {
                if (numTwo === 2 || numTwo === 3 || numTwo === 5 || numTwo === 7) {
                    let buff = `${numOne} ${numTwo} ${numThree}`;
                    console.log(buff);
                }
            }
        }
    }

}
uniquePINCodes(["3", "5", "5"]);
uniquePINCodes(["8", "2", "8"]);
