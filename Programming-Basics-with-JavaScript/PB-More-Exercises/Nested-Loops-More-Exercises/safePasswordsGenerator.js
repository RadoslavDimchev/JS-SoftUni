function safePasswordsGenerator(input) {

    let a = Number(input[0]);
    let b = Number(input[1]);
    let maxPasswords = Number(input[2]);

    let i = 35;
    let j = 64;

    let passCounter = 0;
    let maxPass = false;
    let pass = "";

    for (let k = 1; k <= a; k++) {
        for (let l = 1; l <= b; l++) {
            passCounter++;
            if (passCounter > maxPasswords) {
                maxPass = true;
                break;
            }
            pass += `${String.fromCharCode(i)}${String.fromCharCode(j)}${k}${l}${String.fromCharCode(j)}${String.fromCharCode(i)}|`;
            i++;
            if (i > 55) {
                i = 35;
            }
            j++;
            if (j > 96) {
                j = 64;
            }
        }
        if (maxPass) {
            break;
        }
    }
    console.log(pass);

}
safePasswordsGenerator(["2", "3", "10",]);
safePasswordsGenerator(["20", "50", "10",]);
