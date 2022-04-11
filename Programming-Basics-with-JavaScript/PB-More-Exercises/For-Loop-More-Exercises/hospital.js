function hospital(input) {

    let period = +input[0];

    let doctors = 7;

    let treatedPatients = 0;
    let untreatedPatients = 0;

    for (let i = 1; i <= period; i++) {

        let patientsPerDay = +input[i];

        if (i % 3 === 0 && untreatedPatients > treatedPatients) {
            doctors++
        }

        if (patientsPerDay <= doctors) {
            treatedPatients += patientsPerDay;
        } else {
            treatedPatients += doctors;
            untreatedPatients += (patientsPerDay - doctors);
        }

    }

    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedPatients}.`);

}
hospital(["4", "7", "27", "9", "1"]);
hospital(["6", "25", "25", "25", "25", "25", "2"]);
hospital(["3", "7", "7", "7"]);
