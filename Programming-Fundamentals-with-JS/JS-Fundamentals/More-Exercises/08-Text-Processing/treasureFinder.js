function treasureFinder(input = []) {
    const key = input
        .shift()
        .split(' ')
        .map(Number);

    while (input[0] !== 'find') {
        let index = 0;
        const line = input
            .shift()
            .split('')
            .map(char => String.fromCharCode(char.charCodeAt() - key[index++ % key.length]))
            .join('');

        const pattern = /&(?<type>.*)&.*<(?<coordinates>.*)>/g;
        const match = pattern.exec(line);

        const type = match.groups.type;
        const coordinates = match.groups.coordinates;

        console.log(`Found ${type} at ${coordinates}`);
    }
}

treasureFinder(["1 2 1 3",
    "ikegfp'jpne)bv=41P83X@",
    "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
    "find"]);
treasureFinder(["1 4 2 5 3 2 1",
    "Ulgwh'jt$ozfj!'kqqg(!bx'A3U237GC",
    "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
    "'stj)>34W68Z@",
    "find"]); 