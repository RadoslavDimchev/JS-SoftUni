function firm(input) {

    let neededHours = Number(input[0]);
    let days = Number(input[1]);
    let workersOvertime = Number(input[2]);

    let workHours = (days * 0.90) * 8;
    let overTimeHours = workersOvertime * days * 2;
    let totalHours = Math.floor(workHours + overTimeHours);

    if (neededHours <= totalHours) {
        console.log(`Yes!${totalHours - neededHours} hours left.`);
    } else {
        console.log(`Not enough time!${neededHours - totalHours} hours needed.`);
    }
}
firm([90, 7, 3]);
firm([99, 3, 1]);
firm([50, 5, 2]);