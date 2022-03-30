function clock() {

    let hours = 0;

    while (hours <= 23) {

        for (let minutes = 0; minutes <= 59; minutes++) {

            console.log(`${hours} : ${minutes}`);
        }
        hours++;
    }

}
clock();