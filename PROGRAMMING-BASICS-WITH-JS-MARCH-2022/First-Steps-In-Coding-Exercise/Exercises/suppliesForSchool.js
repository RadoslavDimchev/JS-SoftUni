function suppliesForSchool(input) {

    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let preparation = Number(input[2]);
    let discount = Number(input[3]);

    let pensPrice = pens * 5.80;
    let markersPrice = markers * 7.20;
    let preparationPrice = preparation * 1.20;

    let finalPrice = pensPrice + markersPrice + preparationPrice;
    let discountPrice = finalPrice - (finalPrice * (discount / 100));

    console.log(discountPrice);
}
suppliesForSchool(["2", "3", "4", "25"]);