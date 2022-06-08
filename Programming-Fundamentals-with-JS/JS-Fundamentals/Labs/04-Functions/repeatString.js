function repeatString(string, repeatCount) {
    let result;

    for (let i = 0; i < repeatCount; i++) {
        if (!result) {
            result = string;
        } else {
            result += string;
        }
    }

    console.log(result);


    /* second solution where result has initial value of empty string

    let result = '';

    for (let i = 0; i < repeatCount; i++) {
        result += string;
    }

    console.log(result); */


    /*  third solution on one line 
         console.log(string.repeat(repeatCount)); */
}

repeatString("abc", 3);
repeatString("String", 2);