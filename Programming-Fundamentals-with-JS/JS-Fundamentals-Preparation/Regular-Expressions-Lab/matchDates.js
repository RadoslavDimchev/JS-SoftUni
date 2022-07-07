function matchDates(text) {
    const pattern = /\b\d{2}([-.\/])[A-Z][a-z]{2}\1\d{4}\b/g;

    let match = pattern.exec(text);

    while (match !== null) {
        let [date, month, year] = match[0].split(/[-.\/]/);

        console.log(`Day: ${date}, Month: ${month}, Year: ${year}`);

        match = pattern.exec(text);
    }
}


// second solution

/* function matchDates(text) {
    const pattern = /\b(?<date>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;

    let match = pattern.exec(text);

    while (match !== null) {
        let date = match.groups.date;
        let month = match.groups.month;
        let year = match.groups.year;

        console.log(`Day: ${date}, Month: ${month}, Year: ${year}`);

        match = pattern.exec(text);
    }
} */


// third solution

/* function matchDates(text) {
    const pattern = /\b(?<date>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;

    let match = pattern.exec(text);

    while (match !== null) {
        let date = match[1];
        let month = match[3];
        let year = match[4];

        console.log(`Day: ${date}, Month: ${month}, Year: ${year}`);

        match = pattern.exec(text);
    }
} */

matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);
matchDates(['1/Jan-1951 23/october/197 11-Dec-2010 18.Jan.2014']);