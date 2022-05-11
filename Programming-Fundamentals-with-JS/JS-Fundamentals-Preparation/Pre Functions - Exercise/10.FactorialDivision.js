function factorialDivision(firstNumber, secondNumber) {
    function factorialCalculator(number) {
        let res = 1;
        for (let i = number; i > 0; i--) {
            res *= i;
        }
        return res;
    }

    let finalDivisionResult =
        factorialCalculator(firstNumber) / factorialCalculator(secondNumber);
    console.log(finalDivisionResult.toFixed(2));
}

factorialDivision(5, 2);
factorialDivision(6, 2);