function sunglasses(n) {
    console.log('*'.repeat(2 * n) + ' '.repeat(n) + '*'.repeat(2 * n));
    for (let i = 1; i < n - 1; i++) {
        if (i == Math.trunc((n - 1) / 2)) {
            console.log('*' + '/'.repeat(2 * n - 2) + '*' + '|'.repeat(n) + '*' + '/'.repeat(2 * n - 2) + '*');
        } else {
            console.log('*' + '/'.repeat(2 * n - 2) + '*' + ' '.repeat(n) + '*' + '/'.repeat(2 * n - 2) + '*');
        }

    }
    console.log('*'.repeat(2 * n) + ' '.repeat(n) + '*'.repeat(2 * n));
}

sunglasses(5);