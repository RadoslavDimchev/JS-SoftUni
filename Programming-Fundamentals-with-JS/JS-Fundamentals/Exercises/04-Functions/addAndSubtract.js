function addAndSubtract(firstNum, secondNum, trhirdNum) {

    let sumFirstAndSecond = sum(firstNum, secondNum);
    let result = subtract(sumFirstAndSecond, trhirdNum);

    return result;

    function sum(firstNum, secondNum) {
        return firstNum + secondNum;
    }

    function subtract(sumFirstAndSecond, thirdNum) {
        return sumFirstAndSecond - thirdNum
    }
}

console.log(addAndSubtract(23, 6, 10));
console.log(addAndSubtract(1, 17, 30));
console.log(addAndSubtract(42, 58, 100));