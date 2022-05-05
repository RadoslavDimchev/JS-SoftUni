function equalSums(array) {
    let isEqual = false;

    for (let i = 0; i < array.length; i++) {
        let rightSum = 0;
        let leftSum = 0;
        for (let j = i + 1; j < array.length; j++) {
            rightSum += array[j];
        }

        for (let k = i - 1; k >= 0; k--) {
            leftSum += array[k];
        }

        if (rightSum === leftSum) {
            console.log(i);
            isEqual = true;
            break;
        }
    }

    if (!isEqual) {
        console.log('no');
    }
}

equalSums([1, 2, 3, 3]);