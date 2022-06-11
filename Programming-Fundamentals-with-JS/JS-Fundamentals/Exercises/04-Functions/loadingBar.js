function loadingBar(number) {
    let completed = '%'.repeat(number / 10);
    let incompleted = '.'.repeat(10 - number / 10);

    if (incompleted.length === 0) {
        console.log(`${number}% Complete!`);
        console.log(`[${completed}]`);
    } else {
        console.log(`${number}% [${completed}${incompleted}]`);
        console.log('Still loading...');
    }
}

loadingBar(30);
loadingBar(50);
loadingBar(100);