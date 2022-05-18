function theatrePromotions(dayType, age) {
    let price;
    let isFit = false;
    
    if (age >= 0 && age <= 18) {
        switch (dayType) {
            case 'Weekday':
                price = 12;
                break;
            case 'Weekend':
                price = 15;
                break;
            case 'Holiday':
                price = 5;
                break;
        }
        isFit = true;
    } else if (age > 18 && age <= 64) {
        switch (dayType) {
            case 'Weekday':
                price = 18;
                break;
            case 'Weekend':
                price = 20;
                break;
            case 'Holiday':
                price = 12;
                break;
        }
        isFit = true;
    } else if (age > 64 && age <= 122) {
        switch (dayType) {
            case 'Weekday':
                price = 12;
                break;
            case 'Weekend':
                price = 15;
                break;
            case 'Holiday':
                price = 10;
                break;
        }
        isFit = true;
    }

    if (isFit) {
        console.log(price + "$");
    } else {
        console.log('Error!');
    }
}

theatrePromotions('Weekday', 42);
theatrePromotions('Holiday', -12);
theatrePromotions('Holiday', 15);