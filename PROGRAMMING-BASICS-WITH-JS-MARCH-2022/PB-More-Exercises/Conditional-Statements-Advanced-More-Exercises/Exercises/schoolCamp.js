function schoolCamp(input) {

    let season = input[0];
    let groupType = input[1];
    let studentsNumber = Number(input[2]);
    let nights = Number(input[3]);

    let nightPrice = 0;

    switch (groupType) {
        case "boys":
        case "girls":
            if (season === "Winter") {
                nightPrice = 9.60;
            } else if (season === "Spring") {
                nightPrice = 7.20;
            } else if (season === "Summer") {
                nightPrice = 15;
            }
            break;
        case "mixed":
            if (season === "Winter") {
                nightPrice = 10;
            } else if (season === "Spring") {
                nightPrice = 9.50;
            } else if (season === "Summer") {
                nightPrice = 20;
            }
            break;
    }

    let finalPrice = nights * nightPrice * studentsNumber;

    if (studentsNumber >= 50) {
        finalPrice *= 0.50;
    } else if (studentsNumber >= 20 && studentsNumber < 50) {
        finalPrice *= 0.85;
    } else if (studentsNumber >= 10 && studentsNumber < 20) {
        finalPrice *= 0.95;
    }

    let sport;

    if (season === "Winter") {
        switch (groupType) {
            case "girls": sport = "Gymnastics"; break;
            case "boys": sport = "Judo"; break;
            case "mixed": sport = "Ski"; break;
        }
    } else if (season === "Spring") {
        switch (groupType) {
            case "girls": sport = "Athletics"; break;
            case "boys": sport = "Tennis"; break;
            case "mixed": sport = "Cycling"; break;
        }
    } else if (season === "Summer") {
        switch (groupType) {
            case "girls": sport = "Volleyball"; break;
            case "boys": sport = "Football"; break;
            case "mixed": sport = "Swimming"; break;
        }
    }
    console.log(`${sport} ${finalPrice.toFixed(2)} lv.`);
}
schoolCamp(["Spring", "girls", "20", "7"]);
schoolCamp(["Winter", "mixed", "9", "15"]);
schoolCamp(["Summer", "boys", "60", "7"]);
schoolCamp(["Spring", "mixed", "17", "14"]);