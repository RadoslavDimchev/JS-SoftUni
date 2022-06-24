function movingTarget(input) {
    let targets = input
        .shift()
        .split(' ')
        .map(Number);

    while (input[0] !== 'End') {
        let tokens = input.shift().split(' ');
        let command = tokens[0];
        let index = Number(tokens[1]);
        let value = Number(tokens[2]);

        switch (command) {
            case 'Shoot':
                if (isValidIndex(index)) {
                    shoot(index, value);
                }
                break;
            case 'Add':
                if (isValidIndex(index)) {
                    add(index, value);
                } else {
                    console.log('Invalid placement!');
                }
                break;
            case 'Strike':
                let startIndex = index - value;
                let endIndex = index + value;
                if (isValidIndex(index) && isValidIndex(startIndex) && isValidIndex(endIndex)) {
                    strike(value, startIndex);
                } else {
                    console.log('Strike missed!');
                }
                break;
        }
    }

    console.log(targets.join('|'));

    function shoot(index, power) {
        targets[index] -= power;
        if (targets[index] <= 0) {
            targets.splice(index, 1);
        }
    }

    function add(index, value) {
        targets.splice(index, 0, value);
    }

    function strike(radius, startIndex) {
        targets.splice(startIndex, radius * 2 + 1);
    }

    function isValidIndex(index) {
        let isValid = index >= 0 && index < targets.length ? true : false;
        return isValid;
    }
}

movingTarget(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"]);
movingTarget((["1 2 3 4 5",
    "Strike 0 1",
    "End"]));