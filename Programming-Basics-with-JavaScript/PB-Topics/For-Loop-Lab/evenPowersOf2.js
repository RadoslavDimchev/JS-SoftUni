function evenPowersOf2(input) {

    let n = Number(input[0]);

    for (let i = 0; i <= n; i += 2) {
        let res = Math.pow(2, i);
        console.log(res);
    }

}
evenPowersOf2(["3"]);
evenPowersOf2(["4"]);
evenPowersOf2(["5"]);
evenPowersOf2(["6"]);
evenPowersOf2(["7"]);