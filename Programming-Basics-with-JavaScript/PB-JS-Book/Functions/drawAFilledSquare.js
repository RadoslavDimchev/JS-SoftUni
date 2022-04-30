function drawAFilledSquare(n) {

    function printHeaderFooter() {
        console.log('-'.repeat(2 * n));
    }

    function printMiddle() {
        for (let i = 0; i < n - 2; i++) {
            let line = '-';

            for (let j = 0; j < n - 1; j++) {
                line += '\\/';
            }

            line += '-';

            console.log(line);
        }
    }

    printHeaderFooter();
    printMiddle();
    printHeaderFooter();
}

drawAFilledSquare(3);