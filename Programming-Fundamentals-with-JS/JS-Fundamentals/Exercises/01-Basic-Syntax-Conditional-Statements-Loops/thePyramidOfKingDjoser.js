function thePyramidOfKingDjoser(base, increment) {
    let steps = 0;
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;

    while (base > 0) {
        steps++;

        if (base <= 2) {
            gold = Math.pow(base, 2) * increment;
            break;
        } else if (steps % 5 === 0) {
            lapisLazuli += (base * 4 - 4) * increment;
        } else {
            marble += (base * 4 - 4) * increment;
        }

        stone += Math.pow(base - 2, 2) * increment;

        base -= 2;
    }

    let finalHeight = steps * increment;

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(finalHeight)}`);
}

thePyramidOfKingDjoser(11, 1);
thePyramidOfKingDjoser(11, 0.75);
thePyramidOfKingDjoser(12, 1);
thePyramidOfKingDjoser(23, 0.5);