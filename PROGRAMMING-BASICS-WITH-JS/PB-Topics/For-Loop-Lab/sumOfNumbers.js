function sumOfNumbers(input) {

    let nString = "" + input[0];
    let sum = 0;

    for (let i = 0; i < nString.length; i++) {
        let number = Number(nString.charAt(i))
        sum += number
    }
    console.log(`The sum of the digits is:${sum}`)
}
sumOfNumbers(["1234"]);
sumOfNumbers(["564891"]);