function squareOfStars(n) {
    for (let i = 0; i < n; i++) {
        let square = '';
        for (let j = 0; j < n; j++) {
            square += '* ';
        }
        console.log(square);
    }
}

squareOfStars(3);