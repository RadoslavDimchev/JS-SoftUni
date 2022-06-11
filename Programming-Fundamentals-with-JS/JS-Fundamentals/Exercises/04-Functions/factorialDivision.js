function factorialDivision(firstNum, secondNum) {
    let factorial = 1;

    let result = (getFactorial(firstNum) / getFactorial(secondNum, factorial = 1)).toFixed(2);
    return result;

    function getFactorial(number) {
        if (number > 0) {
            factorial *= number;
            getFactorial(number - 1);
        }

        return factorial;
    }
}

console.log(factorialDivision(5, 2));
console.log(factorialDivision(6, 2));