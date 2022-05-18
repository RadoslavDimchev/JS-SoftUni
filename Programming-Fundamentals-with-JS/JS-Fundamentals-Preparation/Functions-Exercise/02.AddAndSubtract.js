function addAndSubtract(numOne, numTwo, numwThree) {
    function sum(num1, num2) {
        return num1 + num2;
    }

    function subtract(result, num3) {
        return result - num3;
    }

    let result = sum(numOne, numTwo);
    let finalResult = subtract(result, numwThree);
    console.log(finalResult);
}

addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);