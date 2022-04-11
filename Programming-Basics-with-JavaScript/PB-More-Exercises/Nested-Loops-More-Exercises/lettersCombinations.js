function lettersCombinations(input) {

    let start = input[0].charCodeAt();
    let end = input[1].charCodeAt();
    let skip = input[2].charCodeAt();

    let buff = "";
    let validsCounter = 0;

    for (let i = start; i <= end; i++) {
        if (i === skip) {
            continue;
        }
        for (let j = start; j <= end; j++) {
            if (j === skip) {
                continue;
            }
            for (let k = start; k <= end; k++) {
                if (k === skip) {
                    continue;
                }
                buff += `${String.fromCharCode(i)}${String.fromCharCode(j)}${String.fromCharCode(k)} `;
                validsCounter++;
            }
        }
    }
    buff += validsCounter;
    console.log(buff);

}
lettersCombinations(["a", "c", "b"]);
lettersCombinations(["f", "k", "h"]);
lettersCombinations(["a", "c", "z"]);
