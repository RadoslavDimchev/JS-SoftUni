function asciiSumator(input = []) {
    const firstCharAscii = input[0]
        .charCodeAt();
    const secondCharAscii = input[1]
        .charCodeAt();
    const text = input[2];
    let sum = 0;

    const lower = Math.min(firstCharAscii, secondCharAscii);
    const upper = Math.max(firstCharAscii, secondCharAscii);

    text
        .split('')
        .filter(ch => ch.charCodeAt() > lower && ch.charCodeAt() < upper)
        .forEach(ch => sum += ch.charCodeAt());

    console.log(sum);
}

asciiSumator(['.',
    '@',
    'dsg12gr5653feee5']);
asciiSumator(['?',
    'E',
    '@ABCEF']);
asciiSumator(['a',
    '1',
    'jfe392$#@j24ui9ne#@$']);