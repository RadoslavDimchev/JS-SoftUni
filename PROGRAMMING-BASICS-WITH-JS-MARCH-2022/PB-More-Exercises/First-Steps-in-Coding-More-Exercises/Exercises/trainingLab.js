function trainingLab(input) {

    let w = Number(input[0]) * 100;
    let h = Number(input[1]) * 100;

    let widthWorkPlace = 70;
    let lengthWorkPlace = 120;
    let hall = 100;

    let desksOneRow = Math.floor((h - 100) / 70);
    let rows = Math.floor(w / 120)

    let placesCount = desksOneRow * rows - 3

    console.log(placesCount);
}

trainingLab(["15", "8.9"]);
trainingLab(["8.4", "5.2"]);