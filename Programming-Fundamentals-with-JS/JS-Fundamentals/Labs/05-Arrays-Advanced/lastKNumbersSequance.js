function lastKNumbersSequance(n, k) {
    let sequence = [1];

    for (let i = 0; i < n - 1; i++) {
        let elements = sequence.slice(-k);

        let sum = elements.reduce((previous, current) => previous + current, 0);
        sequence.push(sum);
    }

    console.log(sequence.join(' '));
}

lastKNumbersSequance(6, 3);
lastKNumbersSequance(8, 2);