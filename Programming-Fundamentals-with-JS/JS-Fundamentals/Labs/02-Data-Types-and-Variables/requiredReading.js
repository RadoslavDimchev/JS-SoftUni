function requiredReading(bookPages, pagesReadInHour, daysToRead) {
    let totalHoursToRead = bookPages / pagesReadInHour;
    let hoursForEachDay = totalHoursToRead / daysToRead;

    console.log(hoursForEachDay);
}

requiredReading(212, 20, 2);
requiredReading(432, 15, 4);