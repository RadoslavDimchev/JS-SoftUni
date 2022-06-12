function factorialDivision(firstNum, secondNum) {
    let result = (getFactorial(firstNum) / getFactorial(secondNum)).toFixed(2);
    return result;

    function getFactorial(number) {
        if (number === 0 || number === 1) {
            return 1;
        } else {
            let factorial = number * getFactorial(number - 1);
            return factorial;
        }
    }
}

// second solution

// function factorialDivision(firstNum, secondNum) {
//     let firstNumFactorial = 1;
//     let secondNumFactorial = 1;

//     for (let i = 1; i <= firstNum; i++) {
//         firstNumFactorial *= i;
//     }

//     for (let i = 1; i <= secondNum; i++) {
//         secondNumFactorial *= i;
//     }

//     let result = (firstNumFactorial / secondNumFactorial).toFixed(2);
//     return result;
// }

console.log(factorialDivision(5, 2));
console.log(factorialDivision(6, 2));