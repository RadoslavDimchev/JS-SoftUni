function weddingSeats(input) {

    let lastSector = input[0].charCodeAt();
    let rowsFirstSector = Number(input[1]);
    let placesOddRow = Number(input[2]);

    let firstSector = "A".charCodeAt();
    let firstPlace = "a".charCodeAt();
    let placesCounter = 0;
    let currentS = firstSector;

    for (let s = firstSector; s <= lastSector; s++) {
        if (currentS < s) {
            rowsFirstSector++;
        }
        for (let r = 1; r <= rowsFirstSector; r++) {
            currentS = s;
            if (r % 2 !== 0) {
                for (let o = firstPlace; o < firstPlace + placesOddRow; o++) {
                    placesCounter++;
                    console.log(`${String.fromCharCode(s)}${r}${String.fromCharCode(o)}`);
                }
            } else {
                for (let e = firstPlace; e < firstPlace + placesOddRow + 2; e++) {
                    placesCounter++;
                    console.log(`${String.fromCharCode(s)}${r}${String.fromCharCode(e)}`);
                }
            }
        }
    }
    console.log(placesCounter);

}
weddingSeats(["B", "3", "2"]);
weddingSeats(["C", "4", "2"]);
