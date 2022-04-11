function footballKit(input) {

    let tShirt = Number(input[0]);
    let amountToGift = Number(input[1]);

    let shorts = tShirt * 0.75;
    let socks = shorts * 0.20;
    let buttons = 2 * (tShirt + shorts);

    let totalPrice = (tShirt + shorts + socks + buttons) * 0.85;

    if (totalPrice >= amountToGift) {
        console.log(`Yes, he will earn the world-cup replica ball!`);
        console.log(`His sum is ${totalPrice.toFixed(2)} lv.`);
    } else {
        console.log(`No, he will not earn the world-cup replica ball.`);
        console.log(`He needs ${(amountToGift - totalPrice).toFixed(2)} lv. more.`);
    }

}
footballKit(["25", "100"]);
footballKit(["55", "310"]);
