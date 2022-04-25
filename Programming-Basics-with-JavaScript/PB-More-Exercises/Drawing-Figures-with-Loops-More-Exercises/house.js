function house(input) {
    let n = Number(input[0]);
    let spaces = n;

    for (let i = 1; i <= (n + 1) / 2; i++) {
        let dashes = Math.floor((spaces - i) / 2);
        spaces--;
        console.log('-'.repeat(dashes) + '*'.repeat(n - 2 * dashes) + '-'.repeat(dashes));
    }

    for (let j = 0; j <= n / 2 - 1; j++) {
        console.log('|' + '*'.repeat(n - 2) + '|');
    }
}

house([5]);