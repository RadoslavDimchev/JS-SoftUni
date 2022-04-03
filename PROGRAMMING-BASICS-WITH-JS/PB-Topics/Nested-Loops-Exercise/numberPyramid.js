function numberPyramid(input) {

    let n = Number(input[0]);
    let counter = 0;

    let current = 1;
    let isBigger = false;
    let printCurrentLine = "";

    for (let rows = 1; rows <= n; rows++) {
        for (let cols = 1; cols <= rows; cols++) {
            counter++;
            if (current > n) {
                isBigger = true;
                break;
            }
            printCurrentLine += current + " ";
            current++;
        }
        console.log(printCurrentLine);
        printCurrentLine = "";
        if (isBigger) {
            break;
        }
    }

}
numberPyramid(["7"]);
numberPyramid(["12"]);
numberPyramid(["15"]);
