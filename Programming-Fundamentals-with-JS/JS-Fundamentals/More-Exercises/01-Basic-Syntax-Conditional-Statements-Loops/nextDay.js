function nextDay(year, month, day) {
    let nextDate = new Date(year, month - 1, day + 1);

    let newYear = nextDate.getFullYear();
    let newMonth = nextDate.getMonth() + 1;
    let newDate = nextDate.getDate();

    console.log(`${newYear}-${newMonth}-${newDate}`);
}

nextDay(2016, 9, 30);
nextDay(2020, 3, 24);