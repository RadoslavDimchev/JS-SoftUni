function loadingBar(number) {
    let percent = '%'.repeat(number / 10);
    let dots = '.'.repeat(10 - number / 10);
    if (number === 100) {
        console.log('100% Complete!');
        console.log(`[${percent}]`);
    } else {
        console.log(`${number}% [${percent}${dots}]`);
        console.log('Still loading...');
    }
}

loadingBar(50);
loadingBar(100);