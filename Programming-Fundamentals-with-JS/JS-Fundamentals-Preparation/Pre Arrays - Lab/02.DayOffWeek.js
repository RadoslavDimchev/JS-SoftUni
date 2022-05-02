function dayOfWeek(number) {
    if (number < 1 || number > 7) {
        console.log('Invalid day!');
    } else {
        let days = [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
        ]

        let index = number - 1;

        console.log(days[index]);
    }
}

dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(11);