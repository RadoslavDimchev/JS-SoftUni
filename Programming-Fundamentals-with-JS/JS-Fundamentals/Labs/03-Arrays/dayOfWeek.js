function dayOfWeek(number) {
    if (number < 1 || number > 7) {
        console.log('Invalid day!');
    } else {
        let day = [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
        ];

        console.log(day[number - 1]);
    }
}

dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(11);