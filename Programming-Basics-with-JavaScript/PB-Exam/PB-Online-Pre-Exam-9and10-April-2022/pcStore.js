function pcStore(input) {

    let processorD = Number(input[0]);
    let videoCardD = Number(input[1]);
    let ramD = Number(input[2]);
    let ramCount = Number(input[3]);
    let percentDiscount = Number(input[4]);

    let processorLv = (processorD * 1.57) * ((100 - (percentDiscount * 100)) / 100);
    let videoCardLv = videoCardD * 1.57 * ((100 - (percentDiscount * 100)) / 100);
    let ramLv = ramD * 1.57 * ramCount;

    let totalPrice = processorLv + videoCardLv + ramLv;

    console.log(`Money needed - ${totalPrice.toFixed(2)} leva.`);

}
pcStore(["500", "200", "80", "2", "0.05"]);
pcStore(["1200", "850", "120", "4", "0.1"]);
