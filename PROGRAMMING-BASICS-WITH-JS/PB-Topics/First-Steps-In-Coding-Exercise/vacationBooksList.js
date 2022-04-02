function vacationBooksList(input) {

    let pages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);

    let allTimeForRead = pages / pagesPerHour
    let neededHoursPerDay = allTimeForRead / days

    console.log(neededHoursPerDay)

}
vacationBooksList(["212", "20", "2"]);