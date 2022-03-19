function housePainting(input) {

    let xHightHouse = Number(input[0]);
    let yLengthSideWall = Number(input[1]);
    let hHightTriangularWall = Number(input[2]);

    let sideWall = xHightHouse * yLengthSideWall;
    let window = 1.5 * 1.5;
    let twoSideWall = 2 * sideWall - 2 * window;
    let backWall = xHightHouse * xHightHouse;
    let door = 1.2 * 2;
    let sumFrontBack = 2 * backWall - door;

    let totalWalls = twoSideWall + sumFrontBack;

    let greenPaint = totalWalls / 3.4;

    let twoRectanglesRoof = 2 * (xHightHouse * yLengthSideWall);
    let twoTriangles = 2 * (xHightHouse * hHightTriangularWall / 2);

    let totalRoof = twoRectanglesRoof + twoTriangles;

    let redPaint = totalRoof / 4.3;

    console.log(greenPaint.toFixed(2));
    console.log(redPaint.toFixed(2));
}

housePainting(["6", "10", "5.2"]);
housePainting(["10.25", "15.45", "8.88"]);