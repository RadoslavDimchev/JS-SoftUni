function clockPart2() {

    let hours = 0;

    while (hours <= 23) {

        for (let min = 0; min <= 59; min++) {

            for (let sec = 0; sec <= 59; sec++) {

                console.log(`${hours} : ${min} : ${sec}`);
            }
        }
        hours++;
    }

}
clockPart2();