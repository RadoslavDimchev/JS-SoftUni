function triangleOfNumbers(n) {
    for (let i = 1; i <= n; i++) {
        let printLine = '';
        for (let j = 0; j < i; j++) {
            printLine += i + ' ';
        }

        console.log(printLine);
    }
}

triangleOfNumbers(3);
triangleOfNumbers(5);
triangleOfNumbers(6);