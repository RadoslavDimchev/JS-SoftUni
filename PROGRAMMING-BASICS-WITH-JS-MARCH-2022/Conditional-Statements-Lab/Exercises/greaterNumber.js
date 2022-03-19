function greaterNumber(input) {

    let num1 = Number(input[0]);
    let num2 = Number(input[1]);

    if (num1 > num2) {
        console.log(num1);
    } else {
        console.log(num2);
    }
}

greaterNumber(["5", "3"]);
greaterNumber(["3", "5"]);
greaterNumber(["10", "10"]);
greaterNumber(["-5", "5"]);