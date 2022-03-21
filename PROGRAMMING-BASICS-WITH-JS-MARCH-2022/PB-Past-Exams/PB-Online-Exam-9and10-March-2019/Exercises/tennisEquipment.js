function tennisEquipment(input) {

    let tennisRacket = Number(input[0]);
    let countTennisRacket = Number(input[1]);
    let countSneakers = Number(input[2]);

    let sneakers = tennisRacket / 6;

    let tennisRacketsTotal = tennisRacket * countTennisRacket;
    let sneakersTotal = sneakers * countSneakers;

    let racketsAndSneakers = tennisRacketsTotal + sneakersTotal;

    let otherEquipment = racketsAndSneakers * 0.20;

    let finalPrice = tennisRacketsTotal + sneakersTotal + otherEquipment;

    let djokovicPrice = finalPrice / 8;
    let sponsorsPrice = finalPrice * 7 / 8;


    console.log(`Price to be paid by Djokovic ${Math.floor(djokovicPrice)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(sponsorsPrice)}`);

}
tennisEquipment(["850", "4", "2"]);
tennisEquipment(["386", "7", "4"]);