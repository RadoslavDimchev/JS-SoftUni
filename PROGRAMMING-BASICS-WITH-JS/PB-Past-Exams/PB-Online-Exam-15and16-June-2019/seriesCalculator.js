function seriesCalculator(input) {

    let serieName = input[0];
    let seasons = Number(input[1]);
    let episodes = Number(input[2]);
    let durationNoAds = Number(input[3]);

    let durationWithAds = durationNoAds * 1.20;
    let seasonTime = durationWithAds * episodes + 10;
    let seaonsTime = seasonTime * seasons;

    console.log(`Total time needed to watch the ${serieName} series is ${Math.floor(seaonsTime)} minutes.`);

}
seriesCalculator(["Lucifer", "3", "18", "55"]);
seriesCalculator(["Game of Thrones", "7", "10", "50"]);
