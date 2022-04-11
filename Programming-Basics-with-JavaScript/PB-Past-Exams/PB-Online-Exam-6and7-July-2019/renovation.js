function renovation(input) {

    let height = Number(input[0]);
    let width = Number(input[1]);
    let percentNoPaint = Number(input[2]);

    let index = 3;
    let command = input[index];

    let squareM = height * width * 4;
    let paintArea = Math.ceil(squareM - squareM * (percentNoPaint / 100));

    while (command !== "Tired!") {
        let litersPaint = Number(input[index]);

        paintArea -= litersPaint;

        if (paintArea < 0) {
            console.log(`All walls are painted and you have ${Math.abs(paintArea)} l paint left!`);
            break;
        } else if (paintArea === 0) {
            console.log(`All walls are painted! Great job, Pesho!`);
            break;
        }

        index++;
        command = input[index];
    }

    if (command === "Tired!") {
        console.log(`${paintArea} quadratic m left.`);
    }

}
renovation(["3", "5", "10", "2", "3", "4", "Tired!"])
renovation(["2", "3", "25", "6", "7", "8"]);
