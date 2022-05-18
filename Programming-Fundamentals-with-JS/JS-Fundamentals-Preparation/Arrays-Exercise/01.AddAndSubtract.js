function addAndSubtract(arr) {

    let modifiedArr = [];
    let sumOriginalArr = 0;
    let sumModifiedArr = 0;

    for (let i = 0; i < arr.length; i++) {
        let number = arr[i];
        sumOriginalArr += number;
        if (number % 2 === 0) {
            number += i;
        } else {
            number -= i;
        }

        modifiedArr.push(number);
        sumModifiedArr += number;
    }

    console.log(modifiedArr);
    console.log(sumOriginalArr);
    console.log(sumModifiedArr);
}

addAndSubtract([5, 15, 23, 56, 35]);