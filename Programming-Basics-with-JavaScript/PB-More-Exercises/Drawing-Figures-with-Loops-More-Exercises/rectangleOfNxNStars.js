function rectangleOfNxNStars(n) {
    for (let i = 0; i < n; i++) {
        let rectangle = '';
        for (let j = 0; j < n; j++) {
            rectangle += '*';
        }
        console.log(rectangle);
    }
}

rectangleOfNxNStars(2);