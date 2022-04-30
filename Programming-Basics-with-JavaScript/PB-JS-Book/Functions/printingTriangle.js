function printingTriangle(n) {

    function printLine(start = 1, end) {
        let line = '';

        for (let i = start; i <= end; i++) {
            line += i + ' ';
        }

        console.log(line);
    }

    for (let i = 1; i < n; i++) {
        printLine(1, i);
    }

    printLine(1, n);

    for (let i = n - 1; i > 0; i--) {
        printLine(1, i);
    }
}

printingTriangle(10);