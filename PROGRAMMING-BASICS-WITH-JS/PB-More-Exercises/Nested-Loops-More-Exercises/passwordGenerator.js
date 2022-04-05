function passwordGenerator(input) {

    let n = Number(input[0]);
    let l = Number(input[1]) + 97;

    let passwords = "";

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            for (let k = 97; k < l; k++) {
                for (let a = 97; a < l; a++) {
                    for (let b = 1; b <= n; b++) {
                        if (b > i && b > j) {
                            passwords += `${i}${j}${String.fromCharCode(k)}${String.fromCharCode(a)}${b} `;
                        }
                    }
                }
            }
        }
    }
    console.log(passwords);

}
passwordGenerator(["2", "4"]);
passwordGenerator(["3", "1"]);
passwordGenerator(["3", "2"]);
passwordGenerator(["4", "2"]);
