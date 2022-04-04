function weddingSeats(input) {

    let lastSector = input[0].charCodeAt();
    let rowsFirstSector = Number(input[1]);
    let placesOddRow = Number(input[2]);

    let firstSector = "A".charCodeAt();

    let fPlace = "a".charCodeAt();
    let laPlace = "b".charCodeAt();
    let lPlace = "d".charCodeAt();


    for (let s = firstSector; s <= lastSector; s++) {
        let currentS = s;
        if (currentS !== s) {
            rowsFirstSector++;
        }
        for (let r = 1; r <= rowsFirstSector; r++) {
            currentS = s;
            if (r % 2 === 1) {
                for (let p = fPlace; p <= laPlace; p++) {
                    console.log(`${String.fromCharCode(s)}${r}${String.fromCharCode(p)}`);
                }
            } else {
                for (let p2 = fPlace; p2 <= lPlace; p2++) {
                    console.log(`${String.fromCharCode(s)}${r}${String.fromCharCode(p2)}`);
                }
            }

        }
    }

}
weddingSeats(["B", "3", "2"]);
//weddingSeats(["C","4","2"]);
