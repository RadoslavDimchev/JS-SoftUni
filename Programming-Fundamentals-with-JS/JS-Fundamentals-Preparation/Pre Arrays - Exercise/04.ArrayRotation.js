function arrayRotation(array, rotations) {
    let start = rotations % array.length;
    let resultArray = [];

    for (let i = start; i < array.length; i++) {
        resultArray.push(array[i]);
    }

    if (start > 0) {
        for (let j = 0; j < start; j++) {
            resultArray.push(array[j]);
        }
    }

    console.log(resultArray.join(' '));
}

arrayRotation([2, 4, 15, 31], 5);

// function arrayRotation(array, rotations) {
//     for (let index = 0; index < rotations; index++) {
//         let currNum = array.shift();
//         array.push(currNum);
//     }

//     console.log(array.join(' '));
// }

// arrayRotation([51, 47, 32, 61, 21], 2);