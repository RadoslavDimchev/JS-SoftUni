function fishland(input) {

    let skumriaKgPrice = Number(input[0]);
    let cacaKgPrice = Number(input[1]);
    let palamudKg = Number(input[2]);
    let safridKg = Number(input[3]);
    let midiKg = Number(input[4]);

    let palamudPrice = skumriaKgPrice + skumriaKgPrice * 0.60;
    let palamudSum = palamudKg * palamudPrice;
    let safridPrice = cacaKgPrice + cacaKgPrice * 0.80;
    let safridSum = safridKg * safridPrice;
    let midiSum = midiKg * 7.50;

    let finalSum = palamudSum + safridSum + midiSum;

    console.log(finalSum.toFixed(2));
}

fishland([6.90, 4.20, 1.5, 2.5, 1]);
fishland([5.55, 3.57, 4.3, 3.6, 7]);
fishland([7.79, 5.35, 9.3, 0, 0]);