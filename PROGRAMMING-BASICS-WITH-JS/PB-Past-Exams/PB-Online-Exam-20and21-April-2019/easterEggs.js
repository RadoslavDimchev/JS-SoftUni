function easterEggs(input) {

    let paintedEggs = Number(input[0]);
    let red = 0;
    let orange = 0;
    let blue = 0;
    let green = 0;
    let color = "";

    for (let i = 1; i <= paintedEggs; i++) {
        color = input[i];
        if (color === "red") {
            red++;
        } else if (color === "orange") {
            orange++;
        } else if (color === "blue") {
            blue++;
        } else if (color === "green") {
            green++;
        }
    }
    let maxEggs = 0;
    let mostUsedColor = "";

    if (red > maxEggs) {
        maxEggs = red;
        mostUsedColor = "red";
    }
    if (orange > maxEggs) {
        maxEggs = orange;
        mostUsedColor = "orange";
    }
    if (blue > maxEggs) {
        maxEggs = blue;
        mostUsedColor = "blue";
    }
    if (green > maxEggs) {
        maxEggs = green;
        mostUsedColor = "green";
    }

    console.log(`Red eggs: ${red}`);
    console.log(`Orange eggs: ${orange}`);
    console.log(`Blue eggs: ${blue}`);
    console.log(`Green eggs: ${green}`);
    console.log(`Max eggs: ${maxEggs} -> ${mostUsedColor}`);

}
easterEggs(["7", "orange", "blue", "green", "green", "blue", "red", "green"]);
easterEggs(["4", "blue", "red", "blue", "orange"]);
