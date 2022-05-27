function biggestOf3Numbers(numOne, numTwo, numThree) {
    let biggestNum = 0;

    if (numOne >= numTwo && numOne >= numThree) {
        biggestNum = numOne;
    } else if (numTwo >= numOne && numTwo >= numThree) {
        biggestNum = numTwo;
    } else if (numThree >= numOne && numThree >= numTwo) {
        biggestNum = numThree;
    }

    console.log(biggestNum);
}

biggestOf3Numbers(-2, 7, 3);
biggestOf3Numbers(130, 5, 99);
biggestOf3Numbers(2, 2, 2);