function arrayRotation(array, rotations) {
    // First Solution
    while (rotations > 0) {
        let elementToPerform = array.shift();
        array.push(elementToPerform);
        rotations--;
    }

    console.log(array.join(' '));

    // Second solution

    /*     let start = rotations % array.length;
        let resultArray = [];
    
        for (let i = start; i < array.length; i++) {
            resultArray.push(array[i]);
        }
    
        if (start > 0) {
            for (let j = 0; j < start; j++) {
                resultArray.push(array[j]);
            }
        }
    
        console.log(resultArray.join(' ')); */
}

arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);