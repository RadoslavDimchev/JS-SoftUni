function print([a, b]) {

    function calculateTriangleArea() {
        return (a * b) / 2;
    }

    function solve(length, heigth) {

        const a = parseFloat(length);
        const b = parseFloat(heigth);
        const area = calculateTriangleArea(a, b);

        console.log(area);
    }

    solve();
}

print([3, 4]);