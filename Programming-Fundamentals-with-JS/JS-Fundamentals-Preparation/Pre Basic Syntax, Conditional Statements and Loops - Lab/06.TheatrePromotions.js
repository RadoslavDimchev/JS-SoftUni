function theatrePromotions(typeDay, age) {
    let price;

    if (age >= 0 && age <= 122) {
        if (age >= 0 && age <= 18) {
            if (typeDay === 'Weekday') {
                price = 12;
            } else if (typeDay === 'Weekend') {
                price = 15;
            } else if (typeDay === 'Holiday') {
                price = 5;
            }
        } else if (age > 18 && age <= 64) {
            if (typeDay === 'Weekday') {
                price = 18;
            } else if (typeDay === 'Weekend') {
                price = 20;
            } else if (typeDay === 'Holiday') {
                price = 12;
            }
        } else if (age > 64 && age <= 122) {
            if (typeDay === 'Weekday') {
                price = 12;
            } else if (typeDay === 'Weekend') {
                price = 15;
            } else if (typeDay === 'Holiday') {
                price = 10;
            }
        }
        console.log(`${price}$`);
    } else {
        console.log('Error!');
    }
}

theatrePromotions('Weekday', 42);
theatrePromotions('Holiday', -12);
theatrePromotions('Holiday', 15);