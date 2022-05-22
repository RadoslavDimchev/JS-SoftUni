function vacation(group, type, day) {
    let price = 0;

    switch (type) {
        case 'Students':
            if (day === 'Friday') {
                price = 8.45;
            } else if (day === 'Saturday') {
                price = 9.80;
            } else if (day === 'Sunday') {
                price = 10.46;
            }
            break;
        case 'Business':
            if (day === 'Friday') {
                price = 10.90;
            } else if (day === 'Saturday') {
                price = 15.60;
            } else if (day === 'Sunday') {
                price = 16;
            }

            if (group >= 100) {
                group -= 10;
            }
            break;
        case 'Regular':
            if (day === 'Friday') {
                price = 15;
            } else if (day === 'Saturday') {
                price = 20;
            } else if (day === 'Sunday') {
                price = 22.50;
            }
            break;
    }

    let totalPrice = price * group;

    if (type === 'Students' && group >= 30) {
        totalPrice *= 0.85;
    } else if (type === 'Regular' && (group >= 10 && group <= 20)) {
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");