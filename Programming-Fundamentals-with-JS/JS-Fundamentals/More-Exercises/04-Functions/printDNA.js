function printDNA(helixLength) {
    let sequence = 'ATCGTTAGGG'.split('');

    for (let i = 1; i <= helixLength; i++) {
        let [firstChar, secondChar] = sequence.splice(0, 2);

        if (i % 4 === 1) {
            console.log(`**${firstChar}${secondChar}**`);
        } else if (i % 2 === 0) {
            console.log(`*${firstChar}--${secondChar}*`);
        } else {
            console.log(`${firstChar}----${secondChar}`);
        }

        sequence.push(firstChar, secondChar);
    }
}

printDNA(4);
printDNA(10);