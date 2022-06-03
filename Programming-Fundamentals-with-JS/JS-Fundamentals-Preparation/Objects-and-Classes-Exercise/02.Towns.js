function towns(arr) {
    for (let tokens of arr) {
        let townInfo = tokens.split(' | ');

        let townName = townInfo[0];
        let latitude = Number(townInfo[1]).toFixed(2);
        let longitude = Number(townInfo[2]).toFixed(2);

        let result = {};
        result.town = townName;
        result.latitude = latitude;
        result.longitude = longitude;

        console.log(result);
    }
}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);
towns(['Plovdiv | 136.45 | 812.575']);