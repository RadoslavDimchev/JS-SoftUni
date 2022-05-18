function spiceMustFlow(startingYield) {
    let days = 0;
    let totalAmount = 0;

    while (startingYield >= 100) {
        days++;
        totalAmount += startingYield - 26;
        startingYield -= 10;
    }

    console.log(days);
    if (days != 0) {
        console.log(totalAmount - 26);
    } else {
        console.log(totalAmount);
    }
}

spiceMustFlow(111);
spiceMustFlow(450);