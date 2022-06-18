function searchForANumber(firstArray, secondArray) {
    let numbersToTake = secondArray[0];
    let numbersToDelete = secondArray[1];
    let specialNumber = secondArray[2];

    let modifiedNumbers = firstArray.slice(0, numbersToTake);
    modifiedNumbers.splice(0, numbersToDelete);

    let specialNumberCount = 0;
    for (const number of modifiedNumbers) {
        if (number === specialNumber) {
            specialNumberCount++;
        }
    }

    console.log(`Number ${specialNumber} occurs ${specialNumberCount} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);