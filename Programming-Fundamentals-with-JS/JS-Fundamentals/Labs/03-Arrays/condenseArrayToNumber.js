function condenseArrayToNumber(arr) {
    let result = [];

    for (let el of arr) {
        result.push(el);
    }

    while (result.length > 1) {
        let tempArr = [];

        for (let i = 0; i < result.length - 1; i++) {
            tempArr[i] = result[i] + result[i + 1];
        }

        result = tempArr;
    }

    console.log(result.join(''));
}

condenseArrayToNumber([2, 10, 3]);
condenseArrayToNumber([5, 0, 4, 1, 2]);
condenseArrayToNumber([1]);