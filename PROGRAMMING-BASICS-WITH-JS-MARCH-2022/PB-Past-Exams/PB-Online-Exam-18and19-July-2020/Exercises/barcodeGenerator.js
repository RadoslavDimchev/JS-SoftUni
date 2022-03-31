function barcodeGenerator(input) {

    let start = input[0];
    let end = input[1];

    let oddStart = "";
    let oddEnd = "";

    while (start <= end) {

        let firstNumStart = Number(start[0]);
        let secondNumStart = Number(start[1]);
        let thirdNumStart = Number(start[2]);
        let fourthNumStart = Number(start[3]);
        let firstNumEnd = Number(end[0]);
        let secondNumEnd = Number(end[1]);
        let thirdNumEnd = Number(end[2]);
        let fourthNumEnd = Number(end[3]);

        if (firstNumStart % 2 === 1) {
            oddStart += firstNumStart;
        } else {
            firstNumStart += 1;
            oddStart += firstNumStart;
        }

        if (secondNumStart % 2 === 1) {
            oddStart += secondNumStart;
        } else {
            secondNumStart += 1;
            oddStart += secondNumStart;
        }

        if (thirdNumStart % 2 === 1) {
            oddStart += thirdNumStart;
        } else {
            thirdNumStart += 1;
            oddStart += thirdNumStart;
        }

        if (fourthNumStart % 2 === 1) {
            oddStart += fourthNumStart;
        } else {
            fourthNumStart += 1;
            oddStart += fourthNumStart;
        }

        if (firstNumEnd % 2 === 1) {
            oddEnd += firstNumEnd;
        } else {
            firstNumEnd -= 1;
            oddEnd += firstNumEnd;
        }

        if (secondNumEnd % 2 === 1) {
            oddEnd += secondNumEnd;
        } else {
            secondNumEnd -= 1;
            oddEnd += secondNumEnd;
        }

        if (thirdNumEnd % 2 === 1) {
            oddEnd += thirdNumEnd;
        } else {
            thirdNumEnd -= 1;
            oddEnd += thirdNumEnd;
        }

        if (fourthNumEnd % 2 === 1) {
            oddEnd += fourthNumEnd;
        } else {
            fourthNumEnd -= 1;
            oddEnd += fourthNumEnd;
        }

        let oddStartNum = Number(oddStart);
        let oddEndNum = Number(oddEnd);

        let finalNumbers = "";

        for (let i = oddStartNum; i <= oddEndNum; i++) {

            let iStr = i + "";
            let firstNum = iStr[0];
            let secondNum = iStr[1];
            let thirdNum = iStr[2];
            let fourthNum = iStr[3];

            if (firstNum % 2 === 1 && secondNum % 2 === 1 && thirdNum % 2 === 1 && fourthNum % 2 === 1) {

                if (firstNum >= firstNumStart && firstNum <= firstNumEnd) {
                    iStr = firstNum;
                }
                if (secondNum >= secondNumStart && secondNum <= secondNumEnd) {
                    iStr += secondNum;
                }
                if (thirdNum >= thirdNumStart && thirdNum <= thirdNumEnd) {
                    iStr += thirdNum;
                }
                if (fourthNum >= fourthNumStart && fourthNum <= fourthNumEnd) {
                    iStr += fourthNum;
                }
                if (iStr >= 1000) {
                    finalNumbers += iStr + " ";
                }
            } else {
                continue;
            }
        }

        console.log(finalNumbers);
        break;
    }

}
barcodeGenerator(["2345", "6789"]);
barcodeGenerator(["3256", "6579"]);
barcodeGenerator(["1365", "5877"]);
