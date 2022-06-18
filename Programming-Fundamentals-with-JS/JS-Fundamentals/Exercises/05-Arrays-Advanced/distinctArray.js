function distinctArray(integers) {
    let result = [];

    for (let i = 0; i < integers.length; i++) {
        let currentInteger = integers[i];
        if (!result.includes(currentInteger)) {
            result.push(currentInteger);
        }
    }

    console.log(result.join(' '));

    /*     Second solution with Set
    
        let nonRepeatingElements = new Set(integers);
        let resultArray = Array.from(nonRepeatingElements);
        console.log(resultArray.join(' ')); */
}

distinctArray([1, 2, 3, 4]);
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);