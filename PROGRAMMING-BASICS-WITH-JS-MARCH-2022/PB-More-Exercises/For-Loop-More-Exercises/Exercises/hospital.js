function hospital(input) {

    let period = Number(input[0]);
    let inputLength = input.length;

    let doctors = 7;

    let notExaminedPatients = 0;
    let examinedPatients = 0;

    for (let i = 1; i < period; i++) {

        if (doctors < Number(input[i])) {

            notExaminedPatients += Number(input[i]) - doctors;
        } else {
            examinedPatients += examinedPatients
        }
    


        console.log(notExaminedPatients);
        console.log(examinedPatients);
    }


}
hospital(["4", "7", "27", "9", "1"]);
hospital(["6", "25", "25", "25", "25", "25", "2"]);
hospital(["3", "7", "7", "7"]);