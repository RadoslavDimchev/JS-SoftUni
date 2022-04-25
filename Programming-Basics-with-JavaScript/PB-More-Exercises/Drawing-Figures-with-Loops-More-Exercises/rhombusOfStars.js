function rhombusOfStars(n) {
    for (let i = 1; i <= n; i++) {
        console.log(' '.repeat(n - i) + '* '.repeat(i) + ' '.repeat(n - i));
    }
    for (let j = n - 1; j >= 1; j--) {
        console.log(`${' '.repeat(n - j)}${'* '.repeat(j)}${' '.repeat(n - j)}`);
    }
}

rhombusOfStars(3);