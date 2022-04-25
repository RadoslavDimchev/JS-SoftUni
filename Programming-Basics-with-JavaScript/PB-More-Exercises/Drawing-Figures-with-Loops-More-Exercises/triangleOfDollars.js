function triangleOfDollars(n) {
    for (let i = 1; i <= n; i++) {
        let triangle = '';
        for (let j = 1; j <= i; j++) {
            triangle += '$ ';
        }
        console.log(triangle);
    }
}

triangleOfDollars(4);