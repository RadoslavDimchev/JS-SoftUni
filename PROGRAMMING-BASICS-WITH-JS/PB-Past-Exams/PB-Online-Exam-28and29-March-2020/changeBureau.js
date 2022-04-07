function changeBureau(input) {

    let bitcoins = Number(input[0]);
    let chineseYuans = Number(input[1]);
    let commisson = Number(input[2]);

    let btcsTotalLv = bitcoins * 1168;
    let cYuansTotalLv = (chineseYuans * 0.15) * 1.76;

    let euro = (btcsTotalLv + cYuansTotalLv) / 1.95;
    let totalEuro = euro - euro * (commisson / 100);

    console.log(totalEuro.toFixed(2));

}
changeBureau(["1", "5", "5"]);
changeBureau(["20", "5678", "2.4"]);
