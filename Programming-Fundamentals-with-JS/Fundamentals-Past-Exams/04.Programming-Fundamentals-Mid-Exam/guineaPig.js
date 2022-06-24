function guineaPig(input) {
    let food = Number(input[0]) * 1000;
    let hay = Number(input[1]) * 1000;
    let cover = Number(input[2]) * 1000;
    let weight = Number(input[3]) * 1000;

    for (let d = 1; d <= 30; d++) {
        food -= 300;

        if (d % 2 === 0) {
            hay -= food * 0.05;
        }

        if (d % 3 === 0) {
            cover -= weight / 3;
        }
    }

    food /= 1000;
    hay /= 1000;
    cover /= 1000;

    if (food > 0 && hay > 0 && cover > 0) {
        console.log(
            `Everything is fine! Puppy is happy! Food: ${food.toFixed(2)}, Hay: ${hay.toFixed(2)}, Cover: ${cover.toFixed(2)}.`
        );
    } else {
        console.log('Merry must go to the pet store!');
    }
}

guineaPig(["10",
    "5",
    "5.2",
    "1"]);
guineaPig(["1",
    "1.5",
    "3",
    "1.5"]);
guineaPig(["9",
    "5",
    "5.2",
    "1"]);