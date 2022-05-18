function requiredReading(pagesToRead, readPerOneHour, daysToRead) {
    let hoursReading = pagesToRead / readPerOneHour / daysToRead;
    console.log(hoursReading);
}

requiredReading(212, 20, 2);
requiredReading(432, 15, 4);