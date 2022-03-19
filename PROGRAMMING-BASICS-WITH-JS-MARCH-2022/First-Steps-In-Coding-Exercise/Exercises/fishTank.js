function fishTank(input) {

    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percentage = Number(input[3]);

    let volumeOfTheAquarium = length * width * height;
    let volumeInLiters = volumeOfTheAquarium * 0.001;
    let occupiedspace = percentage / 100;

    let litersWater = volumeInLiters * (1 - occupiedspace);


    console.log(litersWater);
}
fishTank(["85", "75", "47 ", "17"]);
fishTank(["105", "77", "89", "18.5"]);