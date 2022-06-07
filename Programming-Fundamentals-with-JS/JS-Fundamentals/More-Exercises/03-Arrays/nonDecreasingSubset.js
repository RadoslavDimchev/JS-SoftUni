function nonDecreasingSubset(arr) {
    let biggestNumber = Number.MIN_SAFE_INTEGER;

    let newArr = arr.filter(x => {
        if (x > biggestNumber) {
            biggestNumber = x;
        }

        return x >= biggestNumber;
    });

    console.log(newArr.join(' '));
}

nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubset([1, 2, 3, 4]);
nonDecreasingSubset([20, 3, 2, 15, 6, 1]);