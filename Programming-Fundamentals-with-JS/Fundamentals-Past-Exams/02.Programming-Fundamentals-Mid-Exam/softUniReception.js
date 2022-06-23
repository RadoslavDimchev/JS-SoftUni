function softUniReception(input) {
    let studentsCount = Number(input.pop());
    let [first, second, third] = input.map(Number);

    let efficiency = first + second + third;
    let time = 0;

    while (studentsCount > 0) {
        time++;

        if (time % 4 !== 0) {
            studentsCount -= efficiency;
        }

    }

    console.log(`Time needed: ${time}h.`);
}

softUniReception(['5', '6', '4', '20']);
softUniReception(['1', '2', '3', '45']);
softUniReception(['3', '2', '5', '40']);