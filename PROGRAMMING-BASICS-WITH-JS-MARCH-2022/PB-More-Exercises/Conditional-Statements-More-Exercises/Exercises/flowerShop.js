function flowerShop(input) {

    let magnolii = Number(input[0]);
    let ziumbiuli = Number(input[1]);
    let roses = Number(input[2]);
    let cactuses = Number(input[3]);
    let giftPrice = Number(input[4]);

    let sum = magnolii * 3.25 + ziumbiuli * 4 + roses * 3.50 + cactuses * 8;
    let sumAfterTaxes = sum * 0.95;

    let over = (Math.floor(sumAfterTaxes - giftPrice));
    let under = (Math.ceil(giftPrice - sumAfterTaxes));

    if (sumAfterTaxes >= giftPrice) {
        console.log(`She is left with ${over} leva.`)
    } else {
        console.log(`She will have to borrow ${under} leva.`)
    }
}
flowerShop([2, 3, 5, 1, 50]);
flowerShop([15, 7, 5, 10, 100]);