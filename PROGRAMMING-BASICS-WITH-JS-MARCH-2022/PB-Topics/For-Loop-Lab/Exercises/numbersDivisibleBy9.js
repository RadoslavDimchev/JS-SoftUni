function numbersDivisibleBy9(input) {

    let number1 = Number(input[0]);
    let number2 = Number(input[1]);

    let sum = 0;
    let printNumber = "";

    for (let i = number1; i <= number2; i++) {
        if (i % 9 === 0) {
            sum += i
            printNumber += `${i}\n`
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(printNumber);
}
numbersDivisibleBy9(["100", "200"]);