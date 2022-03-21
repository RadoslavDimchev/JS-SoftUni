function basketballEquipment(input) {

    let yearTax = Number(input[0]);

    let shoes = yearTax * 0.60;
    let outfit = shoes * 0.80;
    let ball = outfit / 4;
    let accessories = ball / 5;

    let sum = yearTax + shoes + outfit + ball + accessories;
    console.log(sum.toFixed(2));

}
basketballEquipment(["320"]);
basketballEquipment(["550"]);
basketballEquipment(["230"]);