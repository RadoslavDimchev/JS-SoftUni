function memoryGame(input) {
    let sequence = input.shift().split(' ');
    let moves = 0;

    while (input[0] !== 'end') {
        let [firstIndex, secondIndex] = input.shift().split(' ').map(Number);
        moves++;

        let isValidIndexes = (firstIndex === secondIndex)
            || (firstIndex < 0 || firstIndex >= sequence.length)
            || (secondIndex < 0 || secondIndex >= sequence.length);

        if (isValidIndexes) {
            let middleIndex = Math.floor(sequence.length / 2);
            let elementToAdd = `-${moves}a`;
            sequence.splice(middleIndex, 0, elementToAdd, elementToAdd);
            console.log('Invalid input! Adding additional elements to the board');
            continue;
        }

        if (sequence[firstIndex] === sequence[secondIndex]) {
            console.log(`Congrats! You have found matching elements - ${sequence[firstIndex]}!`);
            sequence = sequence.filter(el => el !== sequence[firstIndex]);
        } else if (sequence[firstIndex] !== sequence[secondIndex]) {
            console.log('Try again!');
        }

        if (sequence.length <= 0) {
            return `You have won in ${moves} turns!`;
        }
    }

    return `Sorry you lose :(\n${sequence.join(' ')}`;
}

console.log(memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"]));
console.log(memoryGame([
    "a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "end"]));
console.log(memoryGame([
    "a 2 4 a 2 4",
    "4 0",
    "0 2",
    "0 1",
    "0 1",
    "end"]));