function rectangleOf10x10Stars() {
    for (let i = 0; i < 10; i++) {
        let rectangle = '';
        for (let j = 0; j < 10; j++) {
            rectangle += '*';
        }
        console.log(rectangle);
    }
}

rectangleOf10x10Stars();