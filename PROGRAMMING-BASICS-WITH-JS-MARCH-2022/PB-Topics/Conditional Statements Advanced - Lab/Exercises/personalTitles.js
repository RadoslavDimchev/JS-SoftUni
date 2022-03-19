function personalTitles(input) {

    let age = Number(input[0]);
    let gender = input[1];

    if (gender === "m") {
        if (age >= 16) {
            console.log("Mr.");
        } else if (age < 16) {
            console.log("Master");
        }
    } else if (gender === "f") {
        if (age >= 16) {
            console.log("Ms.");
        } else if (age < 16) {
            console.log("Miss");
        }
    }
}
personalTitles(["12", "f"]);
personalTitles(["17", "m"]);
personalTitles(["25", "f"]);
personalTitles(["13.5", "m"]);