function cone(radius, height) {
    let volume = 1 / 3 * height * Math.PI * Math.pow(radius, 2);

    let surfaceArea = Math.PI * radius * (radius + Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2)));

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${surfaceArea.toFixed(4)}`);
}

cone(3, 5);
cone(3.3, 7.8);