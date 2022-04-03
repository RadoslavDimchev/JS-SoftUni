function oddOrEvenPosition(input) {

    let n = Number(input[0]);

    let oddSum = 0;
    let evenSum = 0;

    let oddMin = Number.MAX_SAFE_INTEGER;
    let oddMax = Number.MIN_SAFE_INTEGER;

    let evenMin = Number.MAX_SAFE_INTEGER;
    let evenMax = Number.MIN_SAFE_INTEGER;

    for (let i = 1; i <= n; i++) {
        let numbers = Number(input[i]);
        if (i % 2 === 1) {
            oddSum += numbers;
            if (oddMin > numbers) {
                oddMin = numbers;
            }
            if (oddMax < numbers) {
                oddMax = numbers;
            }
        } else {
            evenSum += numbers;
            if (evenMin > numbers) {
                evenMin = numbers;
            }
            if (evenMax < numbers) {
                evenMax = numbers;
            }
        }
    }

    if (oddSum === 0) {
        console.log(`OddSum=${oddSum.toFixed(2)},`);
        console.log(`OddMin=No,`);
        console.log(`OddMax=No,`);
    } else {
        console.log(`OddSum=${oddSum.toFixed(2)},`);
        console.log(`OddMin=${oddMin.toFixed(2)},`);
        console.log(`OddMax=${oddMax.toFixed(2)},`);
    }

    if (evenSum === 0) {
        console.log(`EvenSum=${evenSum.toFixed(2)},`);
        console.log(`EvenMin=No,`);
        console.log(`EvenMax=No`);
    } else {
        console.log(`EvenSum=${evenSum.toFixed(2)},`);
        console.log(`EvenMin=${evenMin.toFixed(2)},`);
        console.log(`EvenMax=${evenMax.toFixed(2)}`);
    }

}
oddOrEvenPosition(["6", "2", "3", "5", "4", "2", "1"]);
oddOrEvenPosition(["5", "3", '-2', "8", "11", "-3"]);
oddOrEvenPosition(["2", "1.5", "-2.5"]);
