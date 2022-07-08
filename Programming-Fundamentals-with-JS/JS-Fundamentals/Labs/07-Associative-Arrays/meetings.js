function meetings(input) {
    const list = {};

    for (const info of input) {
        const [weekday, name] = info.split(' ');

        if (list.hasOwnProperty(weekday)) {
            console.log(`Conflict on ${weekday}!`);
        } else {
            list[weekday] = name;
            console.log(`Scheduled for ${weekday}`);
        }
    }

    for (const day in list) {
        console.log(day, '->', list[day]);
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