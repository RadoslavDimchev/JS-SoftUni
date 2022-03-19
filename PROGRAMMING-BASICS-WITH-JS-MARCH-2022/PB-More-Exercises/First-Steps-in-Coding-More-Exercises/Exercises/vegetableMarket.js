function vegetableMarket(input) {

    let vegetablesKgPrice = Number(input[0]);
    let fruitsKgPrice = Number(input[1]);

    let kilogramsVegetables = Number(input[2]);
    let kilogramsfruits = Number(input[3]);

    let vegetablePrice = vegetablesKgPrice * kilogramsVegetables;
    let fruitsPrice = fruitsKgPrice * kilogramsfruits;

    let levaPrice = vegetablePrice + fruitsPrice;
    let euroPrice = levaPrice / 1.94;


    console.log(euroPrice.toFixed(2));
}

vegetableMarket([0.194, 19.4, 10, 10]);
vegetableMarket([1.5, 2.5, 10, 10]);