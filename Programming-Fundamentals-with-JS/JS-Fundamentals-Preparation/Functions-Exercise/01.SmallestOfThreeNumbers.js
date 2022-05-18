function smallestOfThreeNumbers(numOne, numTwo, numThree) {
    let smallestNumber = function (numOne, numTwo, numThree) {
        let smallestNum = 0;
        if (numOne <= numTwo && numOne < numThree) {
            smallestNum = numOne;
        } else if (numTwo <= numOne && numTwo < numThree) {
            smallestNum = numTwo;
        } else {
            smallestNum = numThree;
        }
        return smallestNum;
    }
    console.log(smallestNumber(numOne, numTwo, numThree));
}

smallestOfThreeNumbers(2, 5, 3);