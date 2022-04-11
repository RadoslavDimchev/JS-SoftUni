function highJump(input) {

    let desired = Number(input[0]);
    let startHeight = desired - 30;
    let neededJump = startHeight;
    let index = 1;

    let jumps = 0;
    let fails = 0;

    while (neededJump <= desired) {
        let jump = Number(input[index++]);
        jumps++;

        if (jump > neededJump) {
            if (neededJump >= desired) {
                console.log(`Tihomir succeeded, he jumped over ${neededJump}cm after ${jumps} jumps.`);
                break;
            }
            neededJump += 5;
            fails = 0;
        } else {
            fails++;
            if (fails === 3) {
                console.log(`Tihomir failed at ${neededJump}cm after ${jumps} jumps.`);
                break;
            }
        }
    }

}
highJump(["231", "205", "212", "213", "228", "229", "230", "235"]);
highJump(["250", "225", "224", "225", "228", "231", "235", "234", "235"]);
