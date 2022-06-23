function theLift(input) {
    let peopleWaitingForLift = Number(input[0]);
    let liftState = input[1].split(' ').map(Number);

    let initialOccupiedSpots = liftState.reduce((a, b) => a + b, 0);
    let liftStateLength = liftState.length;

    for (let i = 0; i < liftStateLength; i++) {

        if (peopleWaitingForLift <= 0) {
            break;
        }

        let currentPeople = 4 - liftState[i];
        peopleWaitingForLift -= currentPeople;

        if (peopleWaitingForLift < 0) {
            currentPeople += peopleWaitingForLift;
        }

        liftState[i] += currentPeople;
    }

    let maxSpots = liftState.length * 4 - initialOccupiedSpots;
    let currentOccupiedSpots = liftState.reduce((a, b) => a + b, 0);
    let emptySpots = maxSpots - currentOccupiedSpots;

    if (emptySpots > 0 && peopleWaitingForLift <= 0) {
        console.log('The lift has empty spots!');
    } else if (peopleWaitingForLift > 0 && emptySpots <= 0) {
        console.log(`There isn't enough space! ${peopleWaitingForLift} people in a queue!`);
    }

    console.log(liftState.join(' '));
}

theLift([
    "15",
    "0 0 0 0 0"]);
theLift([
    "20",
    "0 2 0"]);