function nxNMatrix(number) {
    let numbers = number => ((number + ' ').repeat(number) + '\n').repeat(number);
    console.log(numbers(number));
}

nxNMatrix(3);
nxNMatrix(7);
nxNMatrix(2);

// function nxNMatrix(number) {
//     function line(number) {
//         let numbers = '';
//         for (let i = 0; i < number; i++) {
//             numbers += number + ' ';
//         }
//         return numbers + '\n';
//     }
//     let lines = line(number);

//     function reps(number) {
//         console.log(lines.repeat(number));
//     }
//     reps(number);
// }

// nxNMatrix(3);
// nxNMatrix(7);
// nxNMatrix(2);