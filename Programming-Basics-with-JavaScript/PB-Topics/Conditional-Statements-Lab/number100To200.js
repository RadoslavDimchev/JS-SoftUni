function number100To200(input) {

    let num = Number(input[0]);

    if (num < 100) {
        console.log("Less than 100");
    } else if (num <= 200) {
        console.log("Between 100 and 200");
    } else {
        console.log("Greater than 200");
    }
}

number100To200(["95"]);
number100To200(["120"]);
number100To200(["210"]);