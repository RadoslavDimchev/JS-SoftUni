function repainting(input) {

    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let hours = Number(input[3]);

    let nylonPrice = (nylon + 2) * 1.50;
    let paintPrice = (paint + (paint * 0.10)) * 14.50;
    let thinnerPrice = thinner * 5;
    let bagsPrice = 0.40;

    let materialPrice = nylonPrice + paintPrice + thinnerPrice + bagsPrice;
    let workersPrice = (materialPrice * 0.30) * hours;
    let finalPrice = (materialPrice + workersPrice);

    console.log(finalPrice)
}
repainting(["10", "11", "4", "8"]);