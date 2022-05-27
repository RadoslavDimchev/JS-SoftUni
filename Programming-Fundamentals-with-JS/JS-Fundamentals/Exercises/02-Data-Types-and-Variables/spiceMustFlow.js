function spiceMustFlow(startingYield) {
    let days = 0;
    let spriceExtracted = 0;

    while (startingYield >= 100) {
        days++;
        spriceExtracted += startingYield - 26;
        startingYield -= 10;
    }

    let totalAmount = days !== 0 ? spriceExtracted - 26 : spriceExtracted;

    console.log(days);
    console.log(totalAmount);
}

spiceMustFlow(111);
spiceMustFlow(450);