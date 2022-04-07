function careOfPuppy(input) {

    let index = 0;
    let boughtFood = Number(input[index]) * 1000;
    index++;
    let command = input[index];
    let neededFood = 0;

    while (command !== "Adopted") {
        let feeding = Number(input[index]);
        neededFood += feeding;

        index++;
        command = input[index];
    }

    if (boughtFood >= neededFood) {
        console.log(`Food is enough! Leftovers: ${boughtFood - neededFood} grams.`);
    } else {
        console.log(`Food is not enough. You need ${neededFood - boughtFood} grams more.`);
    }

}
careOfPuppy(["4", "130", "345", "400", "180", "230", "120", "Adopted"]);
careOfPuppy(["3", "1000", "1000", "1000", "Adopted"]);
careOfPuppy(["2", "999", "456", "999", "999", "123", "456", "Adopted"]);
