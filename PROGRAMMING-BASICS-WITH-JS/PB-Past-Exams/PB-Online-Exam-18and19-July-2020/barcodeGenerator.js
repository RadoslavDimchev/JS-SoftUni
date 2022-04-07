function barcodeGenerator(input) {

    let start = input[0];
    let end = input[1];

    let numbers = "";
    let firstStart = Number(start[0]);
    let firstEnd = Number(end[0]);
    let secondStart = Number(start[1]);
    let secondEnd = Number(end[1]);
    let thridStart = Number(start[2]);
    let thridEnd = Number(end[2]);
    let fourthStart = Number(start[3]);
    let fourthEnd = Number(end[3]);

    for (let i = firstStart; i <= firstEnd; i++) {
        if (i % 2 === 1) {
        } else {
            continue
        }
        for (let j = secondStart; j <= secondEnd; j++) {
            if (j % 2 === 1) {
            } else {
                continue
            }
            for (let k = thridStart; k <= thridEnd; k++) {
                if (k % 2 === 1) {
                } else {
                    continue
                }
                for (let l = fourthStart; l <= fourthEnd; l++) {
                    if (l % 2 === 1) {
                    } else {
                        continue
                    }
                    numbers += `${i}${j}${k}${l} `;
                }
            }
        }
    }
    console.log(numbers);

}
barcodeGenerator(["2345", "6789"]);
barcodeGenerator(["3256", "6579"]);
barcodeGenerator(["1365", "5877"]);
