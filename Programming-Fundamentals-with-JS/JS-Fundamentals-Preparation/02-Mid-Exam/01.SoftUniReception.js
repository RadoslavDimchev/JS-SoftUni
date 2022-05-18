function softUniReception(array) {
    let studentsPerHour = Number(array.shift()) + Number(array.shift()) + Number(array.shift());
    let allStudents = Number(array.shift());
    let hours = 0;
    for (let i = 0; i < allStudents; i += studentsPerHour) {
        hours++;
        if (hours % 4 === 0) {
            hours++;
        }
    }

    console.log(`Time needed: ${Math.ceil(hours)}h.`);
}

softUniReception(['1', '2', '3', '45'])
softUniReception(['3', '2', '5', '40']);