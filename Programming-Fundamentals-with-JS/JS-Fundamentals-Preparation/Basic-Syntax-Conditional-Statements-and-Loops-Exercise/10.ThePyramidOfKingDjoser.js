function thePyramidOfKingDjoser(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let steps = 0;

    while (base >= 1) {
        steps++;

        if (base > 2) {
            stone += Math.pow(base - 2, 2) * increment;
            if (steps % 5 === 0) {
                lapisLazuli += (base * 4 - 4) * increment;
            } else {
                marble += (base * 4 - 4) * increment;
            }
        } else {
            gold += base * base * increment;
        }

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