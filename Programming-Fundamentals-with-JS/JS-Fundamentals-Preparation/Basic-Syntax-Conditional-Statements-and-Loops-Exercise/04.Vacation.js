function vacation(people, group, day) {
    let totalPrice = 0;

    let studentsFridayPrice = 8.45;
    let studentsSaturdayPrice = 9.8;
    let studentsSundayPrice = 10.46;
    let businessFridayPrice = 10.9;
    let businessSaturdayPrice = 15.6;
    let businessSundayPrice = 16;
    let regularFridayPrice = 15;
    let regularSaturdayPrice = 20;
    let regularSundayPrice = 22.50;

    let studentsDiscountPercentage = 15;
    let businessDiscountPeople = 10;
    let regularDiscountPercentage = 5;

    if (group === 'Business' && people >= 100) {
        people -= businessDiscountPeople;
    }

    switch (group) {
        case 'Students':
            switch (day) {
                case 'Friday':
                    totalPrice = studentsFridayPrice * people;
                    break;
                case 'Saturday':
                    totalPrice = studentsSaturdayPrice * people;
                    break;
                case 'Sunday':
                    totalPrice = studentsSundayPrice * people;
                    break;
            }
            break;
        case 'Business':
            switch (day) {
                case 'Friday':
                    totalPrice = businessFridayPrice * people;
                    break;
                case 'Saturday':
                    totalPrice = businessSaturdayPrice * people;
                    break;
                case 'Sunday':
                    totalPrice = businessSundayPrice * people;
                    break;
            }
            break;
        case 'Regular':
            switch (day) {
                case 'Friday':
                    totalPrice = regularFridayPrice * people;
                    break;
                case 'Saturday':
                    totalPrice = regularSaturdayPrice * people;
                    break;
                case 'Sunday':
                    totalPrice = regularSundayPrice * people;
                    break;
            }
            break;
    }

    if (group === 'Students' && people >= 30) {
        totalPrice -= totalPrice * (studentsDiscountPercentage / 100);
    } else if (group === 'Regular' && people >= 10 && people <= 20) {
        totalPrice -= totalPrice * (regularDiscountPercentage / 100);
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");