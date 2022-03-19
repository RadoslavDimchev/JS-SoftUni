function oscarsCeremony(input) {

    let rent = Number(input[0]);

    let statuettes = rent * 0.70;
    let food = statuettes * 0.85;
    let sound = food / 2;

    let sum = rent + statuettes + food + sound;

    console.log(sum.toFixed(2));
}
oscarsCeremony(["3500"]);
oscarsCeremony(["5555"]);