function squareFrame(n) {
    let firstPrint = '+ ';
    for (let i = 1; i < n - 1; i++) {
        firstPrint += '- ';
    }
    firstPrint += '+';
    console.log(firstPrint);

    for (let j = 1; j < n - 1; j++) {
        let print = '';
        for (let k = 0; k < n; k++) {
            if (k == 0) {
                print += '| ';
            } else if (k == n - 1) {
                print += ' |';
            } else {
                if (k == n - 2) {
                    print += '-';
                } else {
                    print += '- ';
                }
            }
        }
        console.log(print);
    }

    let lastPrint = '+ ';
    for (let l = 1; l < n - 1; l++) {
        lastPrint += '- ';
    }
    lastPrint += '+';
    console.log(lastPrint);
}

squareFrame(6);