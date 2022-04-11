function sumNumbers(input) {

    let index = 0;

    let number = Number(input[index]);
    index++;

    let numbersSum = 0;

    while (numbersSum < number) {

        let numbers = Number(input[index]);
        index++;

        numbersSum += numbers;
    }
    console.log(numbersSum);

}
sumNumbers(["100", "10", "20", "30", "40"]);
sumNumbers(["20", "1", "2", "3", "4", "5", "6"]);
