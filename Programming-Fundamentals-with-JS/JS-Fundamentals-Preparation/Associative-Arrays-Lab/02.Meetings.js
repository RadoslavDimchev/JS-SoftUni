function meetings(input) {
    let result = {};

    for (let line of input) {
        let [weekday, name] = line.split(' ');

        if (result.hasOwnProperty(weekday)) {
            console.log(`Conflict on ${weekday}!`);
        } else {
            result[weekday] = name;
            console.log(`Scheduled for ${weekday}`);
        }
    }

    for (let weekday in result) {
        console.log(weekday, "->", result[weekday]);
    }
}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);
meetings(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George']);