function movieDay(input) {

    let timeForPhotos = Number(input[0]);
    let scenesCount = Number(input[1]);
    let sceneTime = Number(input[2]);

    timeForPhotos *= 0.85;
    timeForPhotos -= scenesCount * sceneTime;

    if (timeForPhotos >= 0) {
        console.log(`You managed to finish the movie on time! You have ${Math.round(timeForPhotos)} minutes left!`);
    } else {
        console.log(`Time is up! To complete the movie you need ${Math.abs(timeForPhotos)} minutes.`);
    }

}
movieDay(["120", "10", "11"]);
movieDay(["60", "15", "3"]);
