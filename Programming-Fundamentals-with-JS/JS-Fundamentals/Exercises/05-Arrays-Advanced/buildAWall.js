function buildAWall(arr) {
    let crews = arr.map(Number);
    let concrete = [];

    while (crews.length > 0) {
        let currentConcrete = 0;

        crews = crews.filter(x => x < 30);
        crews = crews.map(x => x + 1);
        crews.forEach(x => currentConcrete += 195);

        if (crews.length > 0) {
            concrete.push(currentConcrete);
        }
    }

    let finalCost = concrete.reduce((a, b) => a + b, 0) * 1900;

    console.log(concrete.join(', '));
    console.log(finalCost + ' pesos');
}

buildAWall([21, 25, 28]);
buildAWall([17]);
buildAWall([17, 22, 17, 19, 17]);