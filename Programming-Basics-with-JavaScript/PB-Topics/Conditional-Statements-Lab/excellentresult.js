function excellentresult(input) {

    let grade = Number(input[0]);

    if(grade >= 5.50) {
        console.log("Excellent!")
    }

}

excellentresult(["6"]);
excellentresult(["5"]);
excellentresult(["5.50"]);
excellentresult(["5.49"]);