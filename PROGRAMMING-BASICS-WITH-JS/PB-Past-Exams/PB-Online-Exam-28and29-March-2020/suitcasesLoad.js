function suitcasesLoad(input) {

    let trunkCapacity = Number(input[0]);
    let index = 1;
    let command = input[index];

    let totalVolume = 0;
    let suitcases = 0;

    while (command !== "End") {
        let suitcaseVolume = Number(input[index]);
        index++;

        suitcases++;

        if (suitcases % 3 === 0) {
            suitcaseVolume *= 1.10;
        }

        totalVolume += suitcaseVolume;

        if (totalVolume > trunkCapacity) {
            console.log(`No more space!`);
            console.log(`Statistic: ${--suitcases} suitcases loaded.`);
            break;
        }

        command = input[index];
    }
    if (command === "End") {
        console.log(`Congratulations! All suitcases are loaded!`);
        console.log(`Statistic: ${suitcases} suitcases loaded.`);
    }

}
suitcasesLoad(["550", "100", "252", "72", "End"]);
suitcasesLoad(["700.5", "180", "340.6", "126", "220"]);
suitcasesLoad(["1200.2", "260", "380.5", "125.6", "305", "End"]);
