function addAndSubtract(array) {
    let modifiedArray = [];
    let originalArraySum = 0;
    let modifiedArraySum = 0;

    for (let i = 0; i < array.length; i++) {
        let number = array[i];
        originalArraySum += number;
        if (number % 2 === 0) {
            number += i;
        } else {
            number -= i;
        }

        modifiedArray.push(number);
        modifiedArraySum += number;
    }

    console.log(modifiedArray);
    console.log(originalArraySum);
    console.log(modifiedArraySum);
}

addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);