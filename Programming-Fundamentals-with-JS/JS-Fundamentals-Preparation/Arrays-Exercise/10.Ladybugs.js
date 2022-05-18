function ladybugs(input) {
    let n = input.shift();
    let field = new Array(n).fill(0);
    let ladyBugsIndexes = input.shift().split(' ');

    for (let index of ladyBugsIndexes) {
        index = Number(index);
        if (field[index] != undefined) {
            field[index] = 1;
        }
    }

    for (let command of input) {
        let tokens = command.split(' ');
        let startingIndex = Number(tokens[0]);

        if (field[startingIndex] == 1) {
            let currentIndex = startingIndex;
            let direction = tokens[1];
            let offset = Number(tokens[2]);

            if (direction == 'left') {
                offset *= -1;
            }

            while (currentIndex >= 0 && currentIndex < n && field[currentIndex] == 1) {
                if (offset === 0) {
                    break;
                }
                currentIndex += offset;
            }

            field[startingIndex] = 0;
            if (currentIndex >= 0 && currentIndex < n) {
                field[currentIndex] = 1;
            }
        }
    }

    console.log(field.join(' '));
}

ladybugs([3, '0 1',
    '0 right 1',
    '2 right 0']);